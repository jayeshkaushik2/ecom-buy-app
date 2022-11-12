import { Image, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import CommonStyles from "../../themes/common_style";
import { getSubCategory } from "../../context/Apis";

const HomeCategory = () => {
  const styles = CommonStyles();
  const [SubCategory, setSubCategory] = React.useState(null);

  const getData = async () => {
    try {
      console.log("running API...");
      const data = await getSubCategory();
      setSubCategory(data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const handleSubCategoryClick = (e) => {
    console.log("e", e);
  };

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
          data={SubCategory}
          renderItem={({ item, index }) => (
            <>
              <Image
                style={styles.HomeCategory.imgContainer}
                source={{ uri: item?.image }}
                key={index}
                onPress={handleSubCategoryClick}
              />
              <Text
                style={{
                  position: "absolute",
                  bottom: -1,
                  textAlign: "center",
                  marginLeft: 4,
                  maxWidth: 54,
                }}
              >
                {item?.name}
              </Text>
            </>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeCategory;
