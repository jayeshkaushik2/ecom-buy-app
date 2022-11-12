import React from "react";
import { View, Image } from "react-native";

// local imports
import CommonStyles from "../../themes/common_style";

function HomeImages(props) {
  const styles = CommonStyles();
  const [currentImage, setCurrentImage] = React.useState(1);
  const images = [
    require("../assets/universe1.jpg"),
    require("../assets/universe2.jpg"),
    require("../assets/universe3.jpg"),
  ];

  return (
    <View style={{ width: "100%", height: 200 }}>
      <Image
        variant="image"
        source={require(`../assets/universe${2}.jpg`)}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}

export default HomeImages;
