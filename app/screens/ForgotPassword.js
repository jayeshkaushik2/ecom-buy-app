import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { postForgotEmail } from "../../context/Apis";
import CommonStyles from "../../themes/common_style";

function ForgotPassword(props) {
  // styles
  const styles = CommonStyles();
  // variables used
  const [showCompanyName, setShowCompanyName] = React.useState(true);
  const [email, setEmail] = React.useState("");

  const postData = async (data) => {
    try {
      let response = await postForgotEmail({ Data: data });
      console.log(response?.success === true);
      if (response?.success === true) {
        props?.navigation.navigate("verify_forgotpass_otp");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSendOtp = () => {
    let data = {
      email: email,
    };
    postData(data);
  };

  return (
    <View style={styles.container}>
      {showCompanyName ? (
        <Text style={styles.text_heading}>Company</Text>
      ) : null}
      <View style={styles.second_container}>
        <TextInput
          mode="outlined"
          selectionColor="black"
          outlineColor="#e0e0e0"
          activeOutlineColor="#e0e0e0"
          dense={true}
          outlineStyle={styles.custom_outlineStyle}
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(value) => setEmail(value)}
        />

        <Button
          mode="contained"
          onPress={handleSendOtp}
          style={styles.custom_btn}
          labelStyle={styles.custom_btn_text}
        >
          Send OTP
        </Button>
      </View>
    </View>
  );
}

export default ForgotPassword;
