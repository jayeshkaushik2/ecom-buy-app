import React from "react";
import { View, Image, ScrollView, Dimensions, Text } from "react-native";
import { getHomepageData } from "../../context/Apis";

// local imports
import { ECOM_API_URL } from "@env";
import CommonStyles from "../../themes/common_style";

function HomeImages(props) {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const styles = CommonStyles();
  const [HomepageData, setHomepageData] = React.useState(null);
  const [images, setImages] = React.useState([]);

  const getData = async () => {
    try {
      console.log("running API...");
      const homepageData = await getHomepageData();
      console.log(homepageData?.images);
      setImages(homepageData?.images);
      setHomepageData(homepageData);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
    let interval = setInterval(() => {
      console.log("pressed");
    }, 5 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function bottom(e) {
    alert("Swipe Bottom");
  }

  function top(e) {
    alert("Swipe Top");
  }

  const handleClick = (e, item) => {
    const { swipeBottom, swipeTop } = props;
    if (e.nativeEvent.contentOffset.y < 0) {
      swipeBottom(item);
    } else {
      swipeTop(item);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: 250,
      }}
    >
      <ScrollView horizontal={true} pagingEnabled={true}>
        {images &&
          images.map((item, index) => (
            <ScrollView
              key={index}
              onScrollEndDrag={(e) => handleClick(e, item)}
            >
              <Image
                style={{ width: screenWidth, height: 245 }}
                source={{
                  uri: `${ECOM_API_URL}${item?.image}`,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  top: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: item?.is_dark === true ? "white" : "black",
                    fontWeight: "bold",
                  }}
                >
                  {HomepageData?.title}
                </Text>
                <Text
                  style={{
                    color: item?.is_dark === true ? "white" : "black",
                    top: 10,
                    textAlign: "center",
                  }}
                >
                  {HomepageData?.description.slice(0, 150)}...
                </Text>
              </View>
            </ScrollView>
          ))}
      </ScrollView>
    </View>
  );
}

export default HomeImages;
