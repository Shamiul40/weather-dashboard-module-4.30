import React, { useState } from 'react'
import { locationContext } from '../Context'
export default function LocationProvider({children}) {
    const [selectedLocation, setSelectedLocation] = useState(
        {
            location : "",
            
        }
    )

  return (
    <locationContext.Provider>
        {children}
    </locationContext.Provider>
  )
}
