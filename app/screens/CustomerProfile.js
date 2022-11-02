import React from "react";
import { View } from "react-native";
import AppDesgin from "react-native-vector-icons/AntDesign";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Text,
  List,
} from "react-native-paper";

// local imports
import CustomAppBar from "../components/CustomAppBar";
import CommonStyles from "../../themes/common_style";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

function CustomerProfile(props) {
  const styles = CommonStyles();

  return (
    <>
      <CustomAppBar />
      <View style={styles.CustomerProfileStyles.container}>
        <Card style={styles.CustomerProfileStyles.profile_banner}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        </Card>
        <View style={styles.CustomerProfileStyles.profile_user_info}>
          <Avatar.Icon
            size={100}
            icon="camera"
            style={styles.CustomerProfileStyles.avatar}
          />
          <Text
            variant="titleLarge"
            style={styles.CustomerProfileStyles.user_name}
          >
            Customer name
          </Text>
        </View>
        {/* <Button
          icon="login"
          mode="contained"
          style={{ alignItem: "flex-end", }}
        >
          Login
        </Button> */}
      </View>
    </>
  );
}

export default CustomerProfile;
