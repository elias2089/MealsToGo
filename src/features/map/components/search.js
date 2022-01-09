import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, View, Platform } from "react-native";

import { LocationContext } from "../../../services/location/location.context";

// Search Component on Map
export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};
const isAndroid = Platform.OS === "android";
const styles = StyleSheet.create({
  container: {
    padding: 16,
    position: "absolute",
    zIndex: 999,
    top: isAndroid ? 40 : StatusBar.currentHeight,
    width: "100%",
  },
});
