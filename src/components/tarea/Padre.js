import React, { useCallback, useState } from 'react'
import { Hijo } from './Hijo';

export const Padre = () => {

    const numeros = [2,4,6,8,10];

    const [valor, setValor] = useState(0);

    const incrementar = useCallback( (num) => {

        setValor( cont => cont + num );

    },[ setValor ]);

    return (
        <div className='p-3'>
            <h1>Tarea useCallback y memo</h1>
            <h2> Total: { valor } </h2>
            {
                numeros && numeros.map(num =>(

                    <Hijo key={num}  numero={num} incrementar={incrementar} />

                ))
            }
            <hr />
        </div>
    )
}
