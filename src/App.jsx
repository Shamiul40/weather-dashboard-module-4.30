
import './App.css'
import Pages from './Pages/Pages'
import { FavouritesProvider } from './provider/FavouritesProvider'
import WeatherProvider from './provider/WeatherProvider'

function App() {
  

  return (
    <WeatherProvider>
      <FavouritesProvider>
      <Pages />
        </FavouritesProvider>
    </WeatherProvider>
  )
}

export default App
