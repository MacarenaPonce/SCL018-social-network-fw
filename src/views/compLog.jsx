import React from "react";
import {
  Link,
  useHistory
} from 'react-router-dom'
import { useState } from "react/cjs/react.development";
import { auth } from "../firebase";
import '../styles/styles-comps.css';



const LogApp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const historyApp = useHistory();

  const submit = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Usuario logueado exitosamente.');
        historyApp.push('/post')
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }
  console.log(error);
  return (
        <div class="login-container">
          <form className="form-group" onSubmit={submit}>
            <label>
              Correo:
              <input type="text" id="email" name="email" className="form-control" placeholder="Ingresa tu correo" onChange={(event) => { setEmail(event.target.value) }} />
            </label>
            <hr />
            <label>
              Contraseña:
              <input type="password" id="password" name="password" className="form-control" placeholder="Ingresa tu contraseña" onChange={(event) => { setPassword(event.target.value) }} />
            </label>
            <div className="submit-button">
            <button type="submit" class="btn btn-primary">Iniciar sesion</button>
            </div>
            {error ? <p> {error} </p> : null}
            <Link to="/" id="linkLog">¿No tienes cuenta? Regístrate.</Link>
            

          </form>
        </div>
  )
}

export default LogApp;