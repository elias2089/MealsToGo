import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="SettingList"
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        options={{ headerShown: false }}
        name="Favourites"
        component={() => null}
      />
    </SettingsStack.Navigator>
  );
};
