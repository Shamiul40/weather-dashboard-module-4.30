import React from 'react'
import Header from '../Components/Header/Header'
import Weather from '../Components/Wether/WeatherBoard'

export default function Pages() {
  return (
    <div className='max-w-7xl mx-auto py-2' >
     <Header /> 
     <main>
        <section className='grid place-items-center h-screen'>
            <Weather />
        </section>
     </main>
    </div>
  )
}
