import "./App.css";
import Pages from "./Pages/Pages";
import { FavouritesProvider } from "./provider/FavouritesProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <FavouritesProvider>
        <LocationProvider>
          <Pages />
        </LocationProvider>
      </FavouritesProvider>
    </WeatherProvider>
  );
}

export default App;
