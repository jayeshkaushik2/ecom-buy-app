import React from "react";
import { Text, View } from "react-native";

// local imports
import CommonStyles from "../../themes/common_style";
import CustomAppBar from "../components/CustomAppBar";
import HomeCategory from "../components/HomeCategory";

function Home(props) {
  const styles = CommonStyles();
  return (
    <View>
      <CustomAppBar />
      <HomeCategory />
    </View>
  );
}

export default Home;
