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
import AuthContext from "../../context/AuthContext";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

function CustomerProfileStyles(props) {
  const styles = CommonStyles();
  let { user, login } = React.useContext(AuthContext);

  const getData = async () => {
    try {
      let token = user?.AuthToken ? `Bearer ${user?.AuthToken?.access}` : null;
      if (
        token !== null &&
        user.Login !== "Login" &&
        user?.AuthToken !== null
      ) {
        const data = await getProfileData({ token: token });
        console.log(data);
        setUserData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(login);

  React.useEffect(() => {
    getData();
  }, []);

  const handleLoginPress = () => {
    props?.navigation?.navigate("login");
  };

  const handleSignUpPress = () => {
    props?.navigation?.navigate("signup");
  };

  return (
    <>
      <CustomAppBar />
      {login !== "Login" ? (
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
        </View>
      ) : (
        <View
          style={styles?.CustomerProfileStyles?.LoginAction?.loginContainer}
        >
          <Button
            icon="login"
            mode="contained"
            labelStyle={styles?.CustomerProfileStyles?.LoginAction?.btn_text}
            style={styles?.CustomerProfileStyles?.LoginAction?.btn}
            onPress={handleLoginPress}
          >
            Login
          </Button>
          <Button
            icon="login"
            mode="contained"
            labelStyle={styles?.CustomerProfileStyles?.LoginAction?.btn_text}
            style={styles?.CustomerProfileStyles?.LoginAction?.btn}
            onPress={handleSignUpPress}
          >
            Sign up
          </Button>
        </View>
      )}
    </>
  );
}

export default CustomerProfileStyles;
