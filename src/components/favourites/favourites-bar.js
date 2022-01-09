import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <View style={styles.favouritesWrapper}>
      <View style={{ padding: 5 }}>
        <Text>Favourites</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key} style={{ padding: 5 }}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  favouritesWrapper: {
    paddingLeft: 10,
    paddingTop: 10,
  },
});
