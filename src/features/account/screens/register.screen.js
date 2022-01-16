import React, { useState, useContext } from "react";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AccountLigth,
  Title,
  ErrorContainer,
} from "../components/account-background";

import {
  TextInput,
  Button,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover>
        <AccountContainer>
          <Title>Meals To Go</Title>
          <AccountLigth>
            <TextInput
              label="E-mail"
              value={email}
              style={[styles.inputMargin, styles.input]}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(data) => setEmail(data)}
            />
            <TextInput
              label="Password"
              style={[styles.inputMargin, styles.input]}
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(data) => setPassword(data)}
            />
            <TextInput
              label="Repeat Password"
              style={[styles.inputMargin, styles.input]}
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(data) => setRepeatedPassword(data)}
            />
            {error && <ErrorContainer>{error}</ErrorContainer>}
            {!isLoading ? (
              <Button
                icon="email"
                mode="contained"
                style={styles.button}
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                Register
              </Button>
            ) : (
              <ActivityIndicator animating={true} color={Colors.blue300} />
            )}
          </AccountLigth>
          <View style={styles.back}>
            <Button
              icon="arrow-left"
              mode="contained"
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              Back
            </Button>
          </View>
        </AccountContainer>
      </AccountCover>
    </AccountBackground>
  );
};

const styles = StyleSheet.create({
  inputMargin: {
    marginBottom: 16,
  },
  button: {
    padding: 8,
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
  input: {
    width: 300,
  },
  back: {
    marginTop: 16,
  },
});
