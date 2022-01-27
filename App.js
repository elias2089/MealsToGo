import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrvajaaXqcnWkHi5MB0f_U-acjD90YDz8",
  authDomain: "mealstogo-755b5.firebaseapp.com",
  projectId: "mealstogo-755b5",
  storageBucket: "mealstogo-755b5.appspot.com",
  messagingSenderId: "1008450713976",
  appId: "1:1008450713976:web:edb8578f324079d61c308d",
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// LocationContext find location from place
// RestaurantContext find restaurants from location { lat and lng }
// Navigator the screens to menu
export default function App() {
  return (
    <>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
