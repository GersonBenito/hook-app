import React, { memo } from 'react'

export const Hijo = memo(({ numero, incrementar }) => {

    console.log('componente Hijo generado nuevamente');

    return (
        <>
            <button
                className='btn btn-outline-success mr-1'
                onClick={()=>{ incrementar(numero) }}
            >
                {numero}
            </button>
        </>
    )
})
