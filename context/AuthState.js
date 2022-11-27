import AuthContext from "./AuthContext";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

//local imports
import { ECOM_API_URL } from "@env";
import Login from "../app/screens/Login";
import Home from "../app/screens/Home";

const AuthState = ({ children }) => {
  const [AuthTokenVar, setAuthTokenVar] = React.useState("");
  const [User, setUser] = useState(() =>
    AuthTokenVar ? jwt_decode(JSON.parse(AuthTokenVar).access) : null
  );
  const [AuthToken, setAuthToken] = useState(() =>
    AuthTokenVar ? JSON.parse(AuthTokenVar) : null
  );
  const [UserLogin, setUserLogin] = useState(AuthTokenVar ? "Logout" : "Login");

  const AsyncStorageFunction = async (type, key, value) => {
    try {
      if (type === "get") {
        const val = await AsyncStorage.getItem(key);
        setAuthTokenVar(val);
      } else if (type === "set") {
        await AsyncStorage.setItem(key, value);
      } else if (type === "remove") {
        await AsyncStorage.removeItem(key);
      }
    } catch (error) {
      return null;
    }
  };

  let loginUser = async (user_info, props, next_page) => {
    let response = await fetch(`${ECOM_API_URL}/token/`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user_info),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      setUserLogin("Logout");
      AsyncStorageFunction("set", "AuthToken", JSON.stringify(data));
      props?.navigation.navigate(next_page);
    } else {
      alert("unable to login");
    }
  };

  let RefreshUserAccess = async () => {
    let response = await fetch(`${ECOM_API_URL}/token/refresh/`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ refresh: AuthToken.refresh }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      AsyncStorageFunction("set", "AuthToken", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  const logoutUser = (props, next_page) => {
    setAuthToken(null);
    setUser(null);
    setUserLogin("Login");
    AsyncStorageFunction("remove", "AuthToken", "");
    AsyncStorageFunction("remove", "Cart", "");
    props?.navigation.navigate(next_page);
  };

  let userData = {
    user: User,
    AuthToken: AuthToken,
    login: UserLogin,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (AuthToken) {
        RefreshUserAccess();
        AsyncStorageFunction("get", "AuthToken", "");
      }
    }, 4 * 60 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [AuthToken]);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export default AuthState;
