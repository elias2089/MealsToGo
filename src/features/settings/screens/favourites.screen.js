import React, { useContext } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area-component";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card";
import { FadeInView } from "../../../components/animations/fade.animation";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea marginTop={1}>
      <FlatList
        data={favourites}
        initialNumToRender={5}
        removeClippedSubviews
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginBottom: 20 }}
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <FadeInView>
              <RestaurantInfoCard restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  ) : (
    <View style={styles.noFavouritesArea}>
      <Text>No favourites yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noFavouritesArea: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
