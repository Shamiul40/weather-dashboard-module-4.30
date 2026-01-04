import React, { useContext } from 'react'
import { FavouritesContext } from '../Context'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const FavouritesProvider =({children})=>{
    const [favourites, setFavourites] = useLocalStorage("favourites", [])


    return (
        <FavouritesContext.Provider>
            {children}
        </FavouritesContext.Provider>    
    )
}
