import React, { useEffect, useMemo, useState } from 'react'
import { useContador } from '../../hooks/useContador'
import { procesoPesado } from '../helpers/procesoPesado';

export const MemoHook = () => {

    const { counter, incrementar } = useContador(5000);
    const [ show, setShow ] = useState(false);
    const [ color, setColor ] = useState('info');

    // se va ejecutar solo cuando cambie el counter
    const memoProcesoPesado = useMemo(()=> procesoPesado(counter), [counter] );

    //bono
    useEffect(()=>{

        // cambiar de color segun la condicion
        show ? setColor('info') : setColor('warning')
       
    },[show])

    return (
        <div className='p-3'>
            <h1 className={`text-${color}`} >useMemo </h1>
            <h2 className={`text-${color}`} >Contador en: { counter }</h2>

            <p>{ memoProcesoPesado }</p>

            <button 
                className="btn btn-outline-primary mr-1"
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
