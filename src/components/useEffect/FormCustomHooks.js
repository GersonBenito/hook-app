import React from 'react'
import { useForm } from '../../hooks/useForm'

export const FormCustomHooks = () => {

    const [ state, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = state;

    const handleSumbit = (event) =>{
        event.preventDefault();
        console.log(state);
    }


    return (
        <form onSubmit={ handleSumbit }  className='mt-5 p-3'>
            <h1>formulario con custom hooks</h1>

            <div className="form-group">
                <input 
                    type="text"
                    name='name'
                    className='form-control'
                    autoComplete='off'
                    placeholder='Ingrese su nombre'
                    value={ name }
                    onChange={ handleInputChange }
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
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name='password'
                    className='form-control'
                    autoComplete='off'
                    placeholder='*******'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit' className='btn btn-outline-info' >Enviar</button>
            <hr />
        </form>
    )
}
