import React from "react";
import { View } from "react-native";
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
import { getProfileData } from "../../context/Apis";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

function CustomerProfileStyles(props) {
  const styles = CommonStyles();
  let { user, login, logoutUser, AuthToken } = React.useContext(AuthContext);
  const [userData, setUserData] = React.useState(null);

  const getData = async () => {
    try {
      // let token = AuthToken?.access ? `Bearer ${AuthToken?.access}` : null;
      // if (
      //   token !== null &&
      //   user.Login !== "Login" &&
      //   user?.AuthToken !== null
      // ) {
      const data = await getProfileData();
      console.log(">>>>>>>>>", data);
      setUserData(data);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const handleLoginPress = () => {
    props?.navigation?.navigate("login");
  };

  const handleSignUpPress = () => {
    props?.navigation?.navigate("signup");
  };

  const handleLogoutPress = () => {
    logoutUser(props, "mainscreen");
  };

  return (
    <View style={styles?.MainTheme}>
      {login !== "Login" ? (
        <>
          <Card style={styles?.CustomerProfileStyles?.cardStyle}>
            <Card.Cover source={{ uri: `${userData?.banner_image}` }} />
          </Card>
          <View style={styles?.CustomerProfileStyles?.profileContainer}>
            {userData?.profile_image ? (
              <Avatar.Image
                size={80}
                source={{
                  uri: `${userData?.profile_image}`,
                }}
              />
            ) : (
              <Avatar.Icon
                icon="camera"
                size={80}
                source={require("../assets/universe1.jpg")}
                style={styles.CustomerProfileStyles.avatar}
              />
            )}
            <Text
              variant="headlineMedium"
              style={styles?.CustomerProfileStyles?.name_text}
            >
              {userData?.username}
            </Text>
          </View>

          <View style={styles?.CustomerProfileStyles?.btnContainer}>
            <Button
              icon="pencil"
              mode="outlined"
              textColor="orange"
              style={styles?.CustomerProfileStyles?.btnStyle}
              labelStyle={{
                paddingVertical: 10,
              }}
            >
              Edit Profile
            </Button>

            <Button
              icon="cart"
              mode="outlined"
              textColor="orange"
              style={styles?.CustomerProfileStyles?.btnStyle}
              labelStyle={styles?.CustomerProfileStyles?.btnLabelStyle}
            >
              Your Orders
            </Button>

            <Button
              icon="logout"
              mode="outlined"
              textColor="orange"
              style={styles?.CustomerProfileStyles?.outlineBtnStyle}
              labelStyle={styles?.CustomerProfileStyles?.btnLabelStyle}
              onPress={handleLogoutPress}
            >
              Logout
            </Button>
          </View>
        </>
      ) : (
        <View style={styles?.CustomerProfileStyles?.loginStyle?.loginContainer}>
          <Button
            icon="login"
            mode="contained"
            labelStyle={styles?.CustomerProfileStyles?.loginStyle?.btn_text}
            style={styles?.CustomerProfileStyles?.loginStyle?.btn}
            onPress={handleLoginPress}
          >
            Login
          </Button>
          <Button
            icon="login"
            mode="contained"
            labelStyle={styles?.CustomerProfileStyles?.loginStyle?.btn_text}
            style={styles?.CustomerProfileStyles?.loginStyle?.btn}
            onPress={handleSignUpPress}
          >
            Sign up
          </Button>
        </View>
      )}
    </View>
  );
}

export default CustomerProfileStyles;
