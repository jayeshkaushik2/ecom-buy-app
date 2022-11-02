import React from "react";
import { Text, View } from "react-native";
import AppDesgin from "react-native-vector-icons/AntDesign";

// local imports
import CommonStyles from "../../themes/common_style";

function CustomerProfile(props) {
  const styles = CommonStyles();

  return (
    <View style={styles.CustomerProfileStyles.container}>
      <Text>
        Profile Page
        <AppDesgin name="home" size={50} color="red" />
      </Text>
    </View>
  );
}

export default CustomerProfile;
