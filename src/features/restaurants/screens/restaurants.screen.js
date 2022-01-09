import React, { useContext, useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import RestaurantInfoCard from "../components/restaurant-info-card";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search";
import { FavouritesBar } from "../../../components/favourites/favourites-bar";
// Restaurant List Component
export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <SafeArea>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size={50}
              style={styles.activator}
              color={Colors.red800}
            />
          </View>
        )}
        <FlatList
          data={restaurants}
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
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  activator: {
    marginLeft: -25,
  },
});
