import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CreateUserApi } from "../../context/Apis";
import AuthContext from "../../context/AuthContext";

const colors = {
  background_color: "black",
};

function Signup(props) {
  const [showCompanyName, setShowCompanyName] = React.useState(true);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setconfirmPassword] = React.useState("");

  const postData = async (data) => {
    try {
      await CreateUserApi({ userData: data });
      alert("user created");
      props?.navigation.navigate("verify_newuser_otp");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSigup = () => {
    if (password !== confirmPassword) {
      alert("your passwords are not matching!");
    } else {
      let data = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        mobile: mobile,
        password: password,
      };
      postData(data);
    }
  };

  const handleLogin = () => {
    props?.navigation.navigate("login");
  };

  return (
    <View style={styles.container}>
      {showCompanyName ? (
        <Text style={styles.text_heading}>Company</Text>
      ) : null}
      <View style={styles.second_container}>
        <TextInput
          style={styles.input}
          placeholder="First name"
          onChangeText={(value) => setFirstName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last name"
          onChangeText={(value) => setLastName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Mobile"
          onChangeText={(value) => setMobile(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(value) => setUsername(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(value) => setPassword(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          onChangeText={(value) => setconfirmPassword(value)}
        />
      </View>

      <Pressable
        title="Login"
        style={styles.pressable_btn}
        onPress={handleSigup}
      >
        <Text style={styles.pressable_btn_text}>Create Account</Text>
      </Pressable>

      <View styles={styles.bottom_last_container}>
        <Text style={{ top: 40 }}>
          already have an account?
          <Text style={styles.signup_text} onPress={handleLogin}>
            {" "}
            Log in
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
    width: "95%",
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

export default Signup;
