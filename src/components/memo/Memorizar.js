import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import { useContador } from '../../hooks/useContador'
import { SmallCounter } from './SmallCounter';

export const Memorizar = () => {

    const { counter, incrementar } = useContador(10);
    const [ show, setShow ] = useState(false);
    const [ color, setColor ] = useState('danger');

    //bono
    useEffect(()=>{

        // cambiar de color segun la condicion
        show ? setColor('success') : setColor('danger')
       
    },[show])
    
    return (
        <div className='p-3'>
            <h1 className={`text-${color}`} >uso del metodo memo de react </h1>
            <h2 className={`text-${color}`} >Contador en: <SmallCounter value={counter} /> </h2>

            <button 
                className="btn btn-outline-info mr-1"
                onClick={ ()=>incrementar(1) }
            >
                Incrementar
            </button>
            <button 
                className={`btn btn-outline-${color}`}
                onClick={ ()=>setShow(!show) }
            >
                Toggle = {JSON.stringify(show)}
            </button>
            <hr />
        </div>
    )
}
