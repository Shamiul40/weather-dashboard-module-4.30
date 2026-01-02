import { useEffect, useState } from "react"

export const useLocalStorage =(storageKey, defaulValue)=>{
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey))  ?? defaulValue)

    useEffect(()=>{
        localStorage.setItem(storageKey, JSON.stringify(value))
    },[value, storageKey])

    return [value, setValue]
}