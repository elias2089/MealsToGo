import React from "react";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AccountLigth,
  Title,
} from "../components/account-background";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover>
        <View style={styles.animationWrapper}>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../../assets/watermelon.json")}
          />
        </View>
        <AccountContainer>
          <Title>Meals To Go</Title>
          <AccountLigth>
            <Button
              style={[styles.button, styles.buttonMargin]}
              icon="lock-open-outline"
              mode="contained"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Button>
            <Button
              style={styles.button}
              icon="email"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Button>
          </AccountLigth>
        </AccountContainer>
      </AccountCover>
    </AccountBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
  buttonMargin: {
    marginBottom: 16,
  },
  animationWrapper: {
    width: "100%",
    height: "40%",
    position: "absolute",
    top: 30,
    padding: 8,
  },
});
