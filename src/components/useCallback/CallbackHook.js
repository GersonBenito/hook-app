import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState(10);

    const increment = useCallback((number)=>{

        setCounter( c => c + number );

    },[setCounter]);

    return (
        <div className='p-3'>
            <h1>useCallback</h1>
            <h2>Contador: { counter }</h2>

            <p>para poder usar useCallback se necesita usar tambien memo, para que tenga una memoria de cuando renderizar</p>

            <ShowIncrement increment={ increment } />

            <hr />
        </div>
    )
}
