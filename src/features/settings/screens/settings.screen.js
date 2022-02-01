import React, { useContext, useState } from "react";

import { List, Avatar } from "react-native-paper";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import AsyncStorage from "@react-native-async-storage/async-storage";

//call any time focus on screen//
import { useFocusEffect } from "@react-navigation/native";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <SafeArea>
      <List.Section>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
            {!photo ? (
              <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
            ) : (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="#2182BD"
              />
            )}
          </TouchableOpacity>
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
