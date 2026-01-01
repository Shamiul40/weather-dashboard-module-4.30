
import './App.css'
import Pages from './Pages/Pages'
import WeatherProvider from './provider/WeatherProvider'

function App() {
  

  return (
    <WeatherProvider>
      <Pages />
        
    </WeatherProvider>
  )
}

export default App
