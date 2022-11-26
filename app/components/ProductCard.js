import React from "react";
import { View } from "react-native";
import { Button, Card } from "react-native-paper";
import { getProductData } from "../../context/Apis";
import CommonStyles from "../../themes/common_style";

function ProductCard(props) {
  const styles = CommonStyles();
  const [ProductCard, setProductsData] = React.useState(null);

  const getData = async () => {
    try {
      const data = await getProductData();
      setProductsData(data["results"]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  const handleAddToCart = () => {
    alert("added to cart");
  };
  const handleBuy = () => {
    alert("buy");
  };

  return (
    <>
      {ProductCard !== null
        ? ProductCard.map((key, index) => (
            <View key={index} ystyle={styles.ProductCardStyles?.container}>
              <Card style={styles.ProductCardStyles?.card}>
                {key?.images?.length > 0 && key?.images[0]?.image !== "" ? (
                  <Card.Cover
                    source={{ uri: `${key?.images[0]?.image}` }}
                    style={styles.ProductCardStyles?.card_cover}
                  />
                ) : (
                  <Card.Cover
                    source={require("../assets/ProductImage.png")}
                    style={styles.ProductCardStyles?.card_cover}
                  />
                )}
                <Card.Content>
                  <Card.Title
                    titleStyle={{
                      marginLeft: -20,
                      color: "black",
                      float: "left",
                    }}
                    titleVariant="titleMedium"
                    titleNumberOfLines={2}
                    title={key?.title}
                  />
                </Card.Content>
                <Card.Actions style={styles.ProductCardStyles?.card_action}>
                  <Button
                    mode="contained"
                    icon="cart"
                    buttonColor={styles?.colors?.background_color}
                    onPress={handleAddToCart}
                  >
                    Cart
                  </Button>
                  <Button
                    mode="contained"
                    icon="cart"
                    buttonColor={styles?.colors?.background_color}
                    // style={styles.ProductCardStyles?.add_to_cart_btn}
                    // labelStyle={styles.ProductCardStyles?.add_to_cart_btn_label}
                    onPress={handleBuy}
                  >
                    Buy
                  </Button>
                </Card.Actions>
              </Card>
            </View>
          ))
        : null}
    </>
  );
}

export default ProductCard;
