import React, { useContext } from "react";

import { List, Avatar } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  console.log(user.email);
  return (
    <SafeArea>
      <List.Section>
        <View style={styles.avatarContainer}>
          <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          <Text variant="label" style={styles.textContainer}>
            {user.email}
          </Text>
        </View>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
  },
  textContainer: {
    paddingTop: 10,
  },
});
