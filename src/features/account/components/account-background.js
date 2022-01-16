import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

const image = require("../../../../assets/home_bg.jpg");

export const AccountBackground = ({ children }) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

export const AccountCover = ({ children }) => {
  return <View style={styles.cover}>{children}</View>;
};

export const AccountContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export const AccountLigth = ({ children }) => {
  return <View style={styles.ligth}>{children}</View>;
};

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export const ErrorContainer = ({ children }) => {
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  ligth: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 32,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    padding: 8,
    width: 300,
  },
});
