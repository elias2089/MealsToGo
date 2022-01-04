import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search-components";
export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <>
      <SafeArea>
        <Search />
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
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20 }}>
              <RestaurantInfoCard restaurant={item} />
            </View>
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
