import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AppDesgin from "react-native-vector-icons/AntDesign";

// local imports
import Home from "../screens/Home";
import CommonStyles from "../../themes/common_style";
import CustomerProfile from "./CustomerProfile";

function MainScreen(props) {
  const styles = CommonStyles();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="home"
      labeled={false}
      barStyle={styles.CustomBottomAppbar}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let route_name = route.name;

          if (route_name === "home") {
            iconName = focused ? "home" : "home";
          } else if (route_name === "profile") {
            iconName = focused ? "user" : "user";
          }
          return <AppDesgin name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        style: { padding: 10, height: 100, backgroundColor: "none" },
      }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="profile" component={CustomerProfile} />
    </Tab.Navigator>
  );
}

export default MainScreen;
