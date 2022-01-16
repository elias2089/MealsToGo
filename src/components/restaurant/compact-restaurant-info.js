import React from "react";
import { Image, View, Text, StyleSheet, Platform } from "react-native";
// renders web content in a native view.
import WebView from "react-native-webview";

// Restaurant Info { photo and name }
export const CompactRestaurantInfo = ({ restaurant, isMapView = false }) => {
  const { name, photos } = restaurant;
  const CompactImage = (
    <Image style={styles.image} source={{ uri: photos[0] }} />
  );
  const CompactWebView = (
    <WebView style={styles.image} source={{ uri: photos[0] }} />
  );
  const isAndroid = Platform.OS === "android";
  const Photo = isAndroid && isMapView ? CompactWebView : CompactImage;

  return (
    <View style={styles.item}>
      {Photo}
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
  item: {
    padding: 10,
    maxWidth: 120,
    alignItems: "center",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
});
