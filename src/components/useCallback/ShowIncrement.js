import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {

    console.log('componente show increment renderizado nuevamente');

    return (
        <div>
            
            <button 
                className="btn btn-outline-primary"
                onClick={ ()=>increment(5) }
            >
                Incrementar
            </button>

        </div>
    )
})
