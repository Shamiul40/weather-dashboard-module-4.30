import React from 'react'
import Header from '../Components/Header/Header'
import Weather from '../Components/Wether/Weather'

export default function Pages() {
  return (
    <>
     <Header /> 
     <main>
        <section>
            <Weather />
        </section>
     </main>
    </>
  )
}
