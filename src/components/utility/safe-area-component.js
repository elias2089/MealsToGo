import { StatusBar, SafeAreaView, StyleSheet } from "react-native";

export const SafeArea = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
