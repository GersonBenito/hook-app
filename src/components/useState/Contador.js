import React from 'react'
import { useContador } from '../../hooks/useContador'

export const Contador = () => {

    const { counter, incrementar, decrementar, resetear } = useContador(100);

    return (
        <div className='p-3'>
            <h1>useState</h1>

            <h1>Contador: { counter }</h1>
            <button 
                className='btn btn-outline-info ml-3 mr-3' 
                onClick={ ()=>incrementar() }
            >
                Incrementar
            </button>
            <button 
                className='btn btn-outline-warning mr-3' 
                onClick={ resetear }
            >
                Resetear
            </button>
            <button 
                className='btn btn-outline-danger' 
                onClick={ ()=>decrementar() }
            >
                Decrementar
            </button>
            <hr />
        </div>
    )
}
