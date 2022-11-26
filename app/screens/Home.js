import React from "react";
import { ScrollView, Text, View } from "react-native";

// local imports
import CommonStyles from "../../themes/common_style";
import CustomAppBar from "../components/CustomAppBar";
import HomeCategory from "../components/HomeCategory";
import HomeImages from "../components/HomeImages";
import ProductCard from "../components/ProductCard";

function Home(props) {
  const styles = CommonStyles();
  return (
    <View style={styles.HomePageStyles.container}>
      <CustomAppBar />
      <ScrollView>
        <HomeCategory />
        <HomeImages />
        <ProductCard />
      </ScrollView>
    </View>
  );
}

export default Home;
