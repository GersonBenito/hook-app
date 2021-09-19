import React, { memo } from 'react'

export const SmallCounter = memo(({ value }) => {

    console.log('componente renderizado nuevamente');

    return ( 
        <small>{ value }</small> 
    )
})
