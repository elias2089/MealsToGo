import React from "react";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AccountLigth,
  Title,
} from "../components/account-background";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover>
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
});
