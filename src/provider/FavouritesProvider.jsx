import React, { useContext } from 'react'
import { FavouritesContext } from '../Context'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const FavouritesProvider =({children})=>{
    const [favourites, setFavourites] = useLocalStorage("favourites", [])

    const addFavourites =(latitude, longitude, location)=>{
        setFavourites([
            ...favourites,
            {
                latitude : latitude, longitude : longitude, location: location
            }
        ])
    }

    const removeFavourites =(location)=>{
        const restFavourites = favourites.filter(fav=>fav.location !==location)
        setFavourites(restFavourites)
    }

    return (
        <FavouritesContext.Provider value={favourites, addFavourites, removeFavourites}>
            {children}
        </FavouritesContext.Provider>    
    )
}
