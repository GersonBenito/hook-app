import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect( ()=>{
        //console.log('hola');
    }, [] );

    const handleInputChage = ({ target }) =>{

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })

    }

    return (
        <div className='mt-5 p-3'>
            <h1>useEffect</h1>

            <div className="form-group">
                <input 
                    type="text"
                    name='name'
                    className='form-control'
                    autoComplete='off'
                    placeholder='Ingrese 123'
                    value={ name }
                    onChange={ handleInputChage }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name='email'
                    className='form-control'
                    autoComplete='off'
                    placeholder='ingrese su correo'
                    value={ email }
                    onChange={ handleInputChage }
                />
            </div>

            {
                (name === '123') && <Message />
            }
            <hr />
        </div>
    )
}
