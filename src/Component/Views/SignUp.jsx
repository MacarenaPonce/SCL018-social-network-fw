import React from 'react';
import { Link } from "react-router-dom";
const SignUp = () => {
  return(
    <div>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        <input type="text" placeholder="Escribe tu nombre aquí"/>
        <input type="email" placeholder="Escribe tu correo aquí"/>
        <input type="password" placeholder="Escribe tu constraseña aquí"/>
        <button >Registrar</button>
        <p>¿Ya tienes cuenta?</p>
        <Link to='/'>
      <p>Inicia sesión aquí</p>
      </Link>
    </div>
  )
};

export default SignUp;