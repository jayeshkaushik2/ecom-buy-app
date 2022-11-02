import { Appbar } from "react-native-paper";
import React from "react";
import { Searchbar } from "react-native-paper";

// local imports
import CommonStyles from "../../themes/common_style";

function AppBar(props) {
  const styles = CommonStyles();
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Appbar.Header style={styles.CustomAppBar.container}>
      <Searchbar
        selectionColor="black"
        inputStyle={styles.CustomAppBar.search_bar_input}
        style={styles.CustomAppBar.search_bar}
        placeholder="Search Ecombuy"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Appbar.Action
        icon="microphone"
        size={30}
        style={styles.CustomAppBar.mic}
        onPress={() => {
          console.log("mic");
        }}
      />
    </Appbar.Header>
  );
}

export default AppBar;
