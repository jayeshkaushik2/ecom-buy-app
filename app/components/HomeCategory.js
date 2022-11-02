import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CommonStyles from "../../themes/common_style";

const HomeCategory = () => {
  const [images, SetImages] = useState([
    require("../assets/facebook.png"),
    require("../assets/google.png"),
    require("../assets/facebook.png"),
    require("../assets/google.png"),
    require("../assets/facebook.png"),
    require("../assets/google.png"),
    require("../assets/facebook.png"),
    require("../assets/google.png"),
    require("../assets/facebook.png"),
    require("../assets/google.png"),
    require("../assets/facebook.png"),
    require("../assets/google.png"),
    require("../assets/facebook.png"),
    require("../assets/google.png"),
  ]);

  const styles = CommonStyles();

  return (
    <View style={styles.catContainer}>
      <ScrollView contentContainerStyle={{ flexDirection: "column" }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({ item, index }) => (
            <Image
              style={styles.HomeCategory.imgContainer}
              source={item}
              key={index}
            />
          )}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[
            { key: "1", name: "fb" },
            { key: "2", name: "ggle" },
            { key: "3", name: "fb" },
            { key: "4", name: "ggle" },
            { key: "5", name: "fb" },
            { key: "6", name: "ggle" },
            { key: "7", name: "fb" },
            { key: "8", name: "ggle" },
            { key: "9", name: "fb" },
            { key: "10", name: "ggle" },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.HomeCategory.items}>{item.name}</Text>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeCategory;
