import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { LocationContext } from "../../../services/location/location.context";

// Search Component on restaurant list
export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
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

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
  },
});
