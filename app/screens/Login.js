import React, { useContext } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AuthContext from "../../context/AuthContext";

const colors = {
  background_color: "black",
};

function Login(props) {
  const { loginUser } = useContext(AuthContext);
  const [showCompanyName, setShowCompanyName] = React.useState(true);
  const [showGoogleFacebook, setshowGoogleFacebook] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    let data = {
      email: email,
      password: password,
    };
    loginUser(data);
  };

  const handleForgotPass = () => {
    console.log("forgot password");
  };

  const handleGoogleLogin = () => {
    console.log("handleGoogleLogin");
  };

  const handleFacebookLogin = () => {
    console.log("handleFacebookLogin");
  };

  const handleSignup = () => {
    console.log("handleSignup");
  };

  return (
    <View style={styles.container}>
      {showCompanyName ? (
        <Text style={styles.text_heading}>Company</Text>
      ) : null}
      <View style={styles.second_container}>
        <Text style={styles.text}>Welcome!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
        />
        <Pressable
          title="Login"
          style={styles.pressable_btn}
          onPress={handleLogin}
        >
          <Text style={styles.pressable_btn_text}>Login</Text>
        </Pressable>
      </View>

      <View styles={styles.bottom_container}>
        <Text style={styles.forgot_btn} onPress={handleForgotPass}>
          Forgot password?
        </Text>
      </View>

      {showGoogleFacebook ? (
        <View style={styles.login_with_google_or_facebook}>
          <Pressable
            title="Login"
            style={styles.pressable_btn_outlined}
            onPress={handleGoogleLogin}
          >
            <Image
              source={require("../assets/google.png")}
              style={styles.png_icon}
            />
            <Text style={styles.pressable_btn_text_outlined}>Google</Text>
          </Pressable>

          <Pressable
            title="Login"
            style={styles.pressable_btn_outlined}
            onPress={handleFacebookLogin}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={styles.png_icon}
            />
            <Text style={styles.pressable_btn_text_outlined}>Facebook</Text>
          </Pressable>
        </View>
      ) : null}

      <View styles={styles.bottom_last_container}>
        <Text style={{ top: 105 }}>
          Don't have an account?
          <Text style={styles.signup_text} onPress={handleSignup}>
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    flex: 1,
    top: -40,
    justifyContent: "center",
    alignItems: "center",
  },
  second_container: {
    color: "gray",
    width: "95%",
  },
  text_heading: {
    fontSize: 25,
    color: colors.background_color,
    fontStyle: "italic",
    textShadowColor: "gray",
    bottom: 100,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    bottom: 10,
  },

  input: {
    backgroundColor: "#eeeeee",
    padding: 10,
    paddingVertical: 13,
    borderRadius: 10,
    fontSize: 16,
    marginTop: 6,
    marginBottom: 6,
  },
  pressable_btn: {
    top: 15,
    paddingVertical: 13,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: colors.background_color,
    alignItems: "center",
  },
  pressable_btn_text: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  bottom_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  forgot_btn: {
    top: 40,
    bottom: 40,
    fontWeight: "600",
    fontSize: 15,
    color: colors.background_color,
  },
  login_with_google_or_facebook: {
    width: "100%",
    flexDirection: "row",
    top: 40,
    justifyContent: "space-around",
  },
  pressable_btn_outlined: {
    top: 30,
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    borderWidth: 0.3,
    borderColor: "gray",
    backgroundColor: "white",
    paddingVertical: 10,
    width: "40%",
  },
  pressable_btn_text_outlined: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  png_icon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  bottom_last_container: {
    marginTop: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "blue",
  },
  signup_text: {
    fontWeight: "600",
    fontSize: 15,
    color: colors.background_color,
  },
});

export default Login;
