import React from 'react';
import { Link } from "react-router-dom";
const Login = () => {
  return(
    <div>
      <input type="email" placeholder="Escribe tu correo aquí"/>
      <input type="password" placeholder="Escribe tu constraseña aquí"/>
      <button> Ingresar </button>
      <button> Google </button>
      <p>¿No tienes cuenta?</p>
      <Link to='/SignUp'>
      <p>Regístrate aquí</p>
      </Link>
    </div>
  )
};

export default Login;


