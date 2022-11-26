import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BottomNavigation, Text } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

// local imports
import Home from "../screens/Home";
import CommonStyles from "../../themes/common_style";
import CustomerProfile from "./CustomerProfile";

const Tab = createMaterialBottomTabNavigator();
function MainScreen(props) {
  const styles = CommonStyles();

  return (
    <>
      <Tab.Navigator
        shifting={true}
        inactiveColor="black"
        activeColor={styles?.colors?.background_color}
        sceneAnimationEnabled={true}
        barStyle={{ backgroundColor: "#eeeeee", padding: 0 }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Home}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cart" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={CustomerProfile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default MainScreen;
