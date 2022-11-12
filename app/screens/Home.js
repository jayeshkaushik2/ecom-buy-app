import React from "react";
import { Text, View } from "react-native";

// local imports
import CommonStyles from "../../themes/common_style";
import CustomAppBar from "../components/CustomAppBar";
import HomeCategory from "../components/HomeCategory";
import HomeImages from "../components/HomeImages";
import ProductCard from "../components/ProductCard";

const productData = {
  count: 80,
  next: "http://ecom-buy-apis.herokuapp.com/product/?page=2",
  previous: null,
  results: [
    {
      id: 4253,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 0,
      price: 12000,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4254,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 1,
      price: 12001,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4255,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 2,
      price: 12002,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4256,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 3,
      price: 12003,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4257,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 4,
      price: 12004,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4258,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 5,
      price: 12005,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4259,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 6,
      price: 12006,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4260,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 7,
      price: 12007,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4261,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 8,
      price: 12008,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
    {
      id: 4262,
      sub_category: 444,
      title:
        "In ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface. 1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      is_promoted: true,
      sorting_number: 9,
      price: 12009,
      images: [],
      rating: 3,
      discount_pct: "20.00",
      tags: [],
    },
  ],
};

function Home(props) {
  const styles = CommonStyles();
  return (
    <View style={styles.HomepageStyles.container}>
      <CustomAppBar />
      <HomeCategory />
      <HomeImages />
      {/* <ProductCard />;
      {productData["results"].map((key, index) => {
        <ProductCard />;
      })} */}
    </View>
  );
}

export default Home;
