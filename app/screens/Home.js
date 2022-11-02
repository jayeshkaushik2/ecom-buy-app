import React from "react";
import { Text, View } from "react-native";

// local imports
import CommonStyles from "../../themes/common_style";
import CustomAppBar from "../components/CustomAppBar";
import HomeCategory from "../components/HomeCategory";
import HomeImages from "../components/HomeImages";

function Home(props) {
  const styles = CommonStyles();
  return (
    <View style={styles.HomepageStyles.container}>
      <CustomAppBar />
      <HomeCategory />
      <HomeImages />
    </View>
  );
}

export default Home;
