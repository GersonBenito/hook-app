import React from 'react'
import { useContador } from '../../hooks/useContador';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { counter, incrementar, decrementar, resetear } = useContador(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { author, quote } = !!data && data[0]; //si data existe que tome la posicion 0

    return (
        <div className='p-3'>
            <h1>Multiples custom Hooks</h1>

            {
                loading ?
                (
                    <div className="alert alert-info text-center">
                        loading...
                    </div>
                )
                :
                (
                    <blockquote className='blockquote text-right text-info' >
                        <p className='mb-0'>{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }
            <button 
                className="btn btn-outline-danger mr-1"
                onClick={ ()=>decrementar(1) }
            >
                Anterior
            </button>
            <button 
                className="btn btn-outline-warning mr-1"
                onClick={ resetear }
            >
                Resetear
            </button>
            <button 
                className="btn btn-outline-info"
                onClick={ ()=>incrementar(1) }
            >
                Siguiente
            </button>
            <hr />
        </div>
    )
}
