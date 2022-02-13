import React, { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import '../styles/styles-comps.css';
import ShowPost from './compShow.jsx';
import swal from 'sweetalert';


const ShowApp = () => {
  const [Mark, setMark] = useState("");
  const [Model, setModel] = useState("");
  const [Description, setDescription] = useState("");
  const [ShowMsj, setShowMsj] = useState(false);
  const [MsjError, setMsjError] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(
    () => {
      db.collection('posts').onSnapshot((querySnapshot) => {
        const array = [];
        querySnapshot.forEach(doc => {
          array.push({ ...doc.data(), id: doc.id })
        })
        setData(array)
      })
    }, []);


  const btnSubmitChanges = (e) => {
    e.preventDefault();

    if (Mark !== '' && Model !== '' && Description !== '') {
      db.collection("posts").doc().set({
        mark: Mark,
        model: Model,
        description: Description

      })
        .then(() => {
          setShowMsj(true);
          console.log("Document successfully written!");
          setMark('')
          setModel('')
          setDescription('')
        })
        .catch((error) => {

          console.error("Error writing document: ", error);
        })
    } else {
      swal("¡Oh no!", "Tienes campos vacíos, intenta nuevamente.", "error");
      setMsjError(true)
    }
  };
  return (
    <>
      <form className="form m-10 l-5" onSubmit={btnSubmitChanges}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Artista</label>
          <input type="text" class="form-control" name="Mark" onChange={(e) => { setMark(e.target.value) }} >
          </input>
          <label for="exampleFormControlInput1" class="form-label">Fecha</label>
          <input type="text" class="form-control" name="Fecha" onChange={(event) => { setModel(event.target.value) }} >
          </input>

        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
          <textarea type="text" class="form-control" name="Description" onChange={(event) => { setDescription(event.target.value) }} rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-outline-primary">Crear post</button>
        {/* <button type="submit" class="btn btn-outline-success">Subir Cambios</button> */}
        {ShowMsj === true ? <p>Publicación Creada</p> : ''}
        {MsjError === true ? <p>Revisa tu Información</p> : ''}
      </form>
      <div>
        {data.map(item => {
          return (
            <ShowPost key={item.id}
              mark={item.mark}
              model={item.model}
              description={item.description} />
          )
        })}
      </div>

      <p>Me gusta: {count}</p>
      <button type="button" class="btn btn-outline-success" onClick={() => setCount(count + 1)}>
        Like
      </button>
    </>
  )

}
export default ShowApp;
