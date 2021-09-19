import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [ coordenadas, setCoordenadas ] = useState({x: 0, y: 0});

    const { x, y } = coordenadas;

    const mouseMove = (event) =>{
        
        setCoordenadas({x: event.x, y: event.y})

    }

    useEffect(() => {

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }

    }, [])

    return (
        <div>
            <h3>Erees genial!</h3>
            <p>x: { x }, y: { y }</p>
        </div>
    )
}
