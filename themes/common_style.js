import { StyleSheet, Platform } from "react-native";

const colors = {
  background_color: "orange",
};

const CommonStyles = () => {
  const styles = StyleSheet.create({
    container: {
      fontSize: 20,
      flex: 1,
      paddingTop: Platform.OS === "android" ? 25 : 0,
      justifyContent: "center",
      alignItems: "center",
    },
    second_container: {
      color: "gray",
      width: "95%",
    },
    text_heading: {
      fontSize: 25,
      color: colors.background_color,
      fontStyle: "italic",
      textShadowColor: "gray",
      bottom: 50,
      fontWeight: "bold",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: "gray",
      bottom: 10,
    },
    custom_outlineStyle: {
      borderRadius: 10,
    },
    input: {
      backgroundColor: "#e0e0e0",
      padding: 10,
      paddingVertical: 10,
      borderRadius: 15,
      fontSize: 16,
      marginTop: 6,
      marginBottom: 6,
    },
    custom_btn: {
      top: 15,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: colors.background_color,
      alignItems: "center",
    },
    custom_btn_text: {
      fontSize: 17,
      paddingVertical: 10,
      width: "100%",
      fontWeight: "bold",
      letterSpacing: 0.5,
      color: "white",
    },
    bottom_container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
    },
    forgot_btn: {
      top: 40,
      bottom: 40,
      fontWeight: "600",
      fontSize: 15,
      color: colors.background_color,
    },
    login_with_google_or_facebook: {
      width: "100%",
      flexDirection: "row",
      top: 40,
      justifyContent: "space-around",
    },
    pressable_btn_outlined: {
      top: 30,
      borderRadius: 10,
      elevation: 3,
      alignItems: "center",
      flexDirection: "row",
      padding: 20,
      borderWidth: 0.3,
      borderColor: "gray",
      backgroundColor: "white",
      paddingVertical: 10,
      width: "40%",
    },
    pressable_btn_text_outlined: {
      fontSize: 17,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
    },
    png_icon: {
      width: 25,
      height: 25,
      marginLeft: 5,
      marginRight: 5,
    },
    bottom_last_container: {
      marginTop: 50,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "blue",
    },
    signup_text: {
      fontWeight: "600",
      fontSize: 15,
      color: colors.background_color,
    },

    // Custom App Bar styling
    CustomAppBar: {
      container: {
        backgroundColor: colors.background_color,
        height: 100,
      },
      search_bar_input: {
        fontSize: 17,
      },
      search_bar: {
        width: "85%",
        marginLeft: 4,
      },
      mic: {},
    },

    CustomBottomAppbar: {
      backgroundColor: "white",
    },

    // homepage styling
    HomepageStyles: {
      container: {
        height: "100%",
      },
    },

    // customer profile styling
    CustomerProfileStyles: {
      container: {
        height: "100%",
        paddingTop: Platform.OS === "android" ? 25 : 0,
      },
    },
  });

  return styles;
};

export default CommonStyles;
