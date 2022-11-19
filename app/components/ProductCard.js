import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { getProductData } from "../../context/Apis";
import CommonStyles from "../../themes/common_style";

function ProductCard(props) {
  const styles = CommonStyles();
  const [ProductCard, setProductsData] = React.useState(null);

  const getData = async () => {
    try {
      const data = await getProductData();
      console.log("data", data);
      setProductsData(data["results"]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.ProductCardStyles?.container}>
      <Card style={styles.ProductCardStyles?.card}>
        <Card.Cover
          source={{
            uri: "http://fc51-2402-8100-2038-19a5-513f-d206-47f7-c239.in.ngrok.io/media/product_image/andras-vas-Bd7gNnWJBkU-unsplash.jpg",
          }}
          style={styles.ProductCardStyles?.card_cover}
        />
        <Card.Content>
          <Card.Title
            titleStyle={{ marginLeft: -20, color: "black", float: "left" }}
            titleVariant="titleMedium"
            titleNumberOfLines={2}
            title="In ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface."
          />
        </Card.Content>
        <Card.Actions style={styles.ProductCardStyles?.card_action}>
          <Button
            mode="contained"
            icon="cart"
            style={styles.ProductCardStyles?.add_to_cart_btn}
            labelStyle={styles.ProductCardStyles?.add_to_cart_btn_label}
          >
            Cart
          </Button>
          <Button
            mode="contained"
            icon="cart"
            style={styles.ProductCardStyles?.buy_btn}
            labelStyle={styles.ProductCardStyles?.buy_btn_label}
          >
            Buy
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default ProductCard;
