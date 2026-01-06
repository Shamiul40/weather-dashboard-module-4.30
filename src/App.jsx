import "./App.css";
import Pages from "./Pages/Pages";
import { FavouritesProvider } from "./provider/FavouritesProvider";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouritesProvider>
          <Pages />
        </FavouritesProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
