import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

export const Favourite = ({ restaurant }) => {
  const { placeId } = restaurant;
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((data) => data.placeId === placeId);
  return (
    <TouchableOpacity
      style={styles.favouriteButton}
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favouriteButton: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 9,
  },
});
