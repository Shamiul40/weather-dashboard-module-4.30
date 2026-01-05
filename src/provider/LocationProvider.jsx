import React, { useState } from 'react'
import { locationContext } from '../Context'
export default function LocationProvider({children}) {
    const [selectedLocation, setSelectedLocation] = useState(
        {
            location : "",
            latitude :0,
            longitude : 0,

        }
    )

  return (
    <locationContext.Provider>
        {children}
    </locationContext.Provider>
  )
}
