import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";

// LocationContext find location from place
// RestaurantContext find restaurants from location { lat and lng }
// Navigator the screens to menu
export default function App() {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <AppNavigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
