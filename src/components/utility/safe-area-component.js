import { StatusBar, SafeAreaView, StyleSheet } from "react-native";

// SafeArea Component use to have security area on device
export const SafeArea = ({ marginTop, children }) => {
  const styles = StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      marginTop: marginTop ? marginTop : StatusBar.currentHeight,
      backgroundColor: "white",
    },
  });
  return (
    <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
  );
};
