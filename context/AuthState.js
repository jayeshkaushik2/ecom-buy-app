import AuthContext from "./AuthContext";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { ECOM_API_URL } from "@env";
import { AsyncStorage } from "react-native";

const AuthState = ({ children }) => {
  let AuthToken = "";
  //   const [User, setUser] = useState(() =>
  //     localStorage.getItem("AuthToken")
  //       ? jwt_decode(JSON.parse(localStorage.getItem("AuthToken")).access)
  //       : null
  //   );

  //   const [AuthToken, setAuthToken] = useState(() =>
  //     localStorage.getItem("AuthToken")
  //       ? JSON.parse(localStorage.getItem("AuthToken"))
  //       : null
  //   );

  //   const [Login, setLogin] = useState(
  //     localStorage.getItem("AuthToken") ? "Logout" : "Login"
  //   );

  let loginUser = async (user_info) => {
    console.log("ECOM_API_URL", ECOM_API_URL);

    let response = await fetch(`${ECOM_API_URL}/token/`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user_info),
    });
    let data = await response.json();
    console.log("response_data>>>", data);
    if (response.status === 200) {
      //   setAuthToken(data);
      //   setLogin("Logout");
      //   setUser(jwt_decode(data.access));
      //   localStorage.setItem("AuthToken", JSON.stringify(data));
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
      //   setAuthToken(data);
      //   setUser(jwt_decode(data.access));
      //   localStorage.getItem("AuthToken", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  const logoutUser = () => {
    // setAuthToken(null);
    // setUser(null);
    // setLogin("Login");
    // localStorage.removeItem("AuthToken");
    // localStorage.removeItem("Cart");
  };

  let userData = {
    // user: User,
    // AuthToken: AuthToken,
    // login: Login,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (AuthToken) {
        RefreshUserAccess();
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
