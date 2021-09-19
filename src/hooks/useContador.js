import { useState } from "react"

export const useContador = (initialState = 10) =>{

    const [ counter, setCounter ] = useState(initialState);  

    const incrementar = (number = 1) =>{
        setCounter( counter + number );
    }

    const decrementar = (number = 1) =>{
        setCounter( counter - number );
    }

    const resetear = () =>{
        setCounter( initialState )
    }

    return {
        counter,
        incrementar,
        decrementar,
        resetear
    }

}