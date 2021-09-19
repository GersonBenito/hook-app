import React, { useState } from 'react'
import { MultipleCustomHooks } from '../useFetch/MultipleCustomHooks'

export const EjemploReal = () => {

    const [ show, setShow ] = useState(false);

    return (
        <div className='p-3' >
            <h1>Uso real de useRef</h1>
            { show && <MultipleCustomHooks /> }
            <button 
                className="btn btn-outline-success"
                onClick={()=>setShow(!show)}
            >
                Toggle
            </button>
            <hr />
        </div>
    )
}
