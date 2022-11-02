import { Image, Text, View, FlatList, ScrollView } from "react-native";
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
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
        }}
      >
        <FlatList
          style={{
            padding: 10,
            paddingTop: 0,
            height: 95,
            backgroundColor: "white",
            margin: 5,
          }}
          horizontal
          showsHorizontalScrollIndicator={true}
          data={images}
          renderItem={({ item, index }) => (
            <>
              <Image
                style={styles.HomeCategory.imgContainer}
                source={item}
                key={index}
              />
              <Text
                style={{
                  position: "absolute",
                  bottom: -1,
                  textAlign: "center",
                  marginLeft: 4,
                }}
              >
                Mobiles
              </Text>
            </>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeCategory;
