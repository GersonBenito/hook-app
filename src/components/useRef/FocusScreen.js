import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    //hacer una referencia de forma tradicional con JavaScript
    const handleClick = () =>{
        document.querySelector('#input1').select();
    }

    //uso de referencia con useRef
    const handleClickRef = () =>{
        inputRef.current.select();
    }

    return (
        <div className='p-3' >
            <h1>useRef</h1>

            <input 
                type='text'
                className='form-control'
                placeholder='ingrese su nombre'
                id='input1'
            />

            <input 
                ref={ inputRef }
                type='text'
                className='form-control mt-3'
                placeholder='ingrese su nombre'
            />  

            <button 
                className="btn btn-outline-primary mt-2 mr-1"
                onClick={ handleClick }
            >
                Focus js
            </button>
            <button 
                className="btn btn-outline-primary mt-2"
                onClick={ handleClickRef }
            >
                Focus useRef
            </button>
            <hr />
        </div>
    )
}
