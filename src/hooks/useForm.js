import { useState } from "react"

export const useForm = (initialState = {}) =>{

    const [ state, setState ] = useState(initialState);

    const handleInputChange = ({ target }) =>{

        const { name, value } = target;

        setState({
            ...state,
            [name]: value
        })

    }

    return [ state, handleInputChange ]

}