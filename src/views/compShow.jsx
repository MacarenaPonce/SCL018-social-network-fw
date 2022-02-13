import React, { useEffect, useState } from "react";
import { db } from '../firebase.js';

const ShowPost = (props) => {
    const [Delete, setDelete] = useState();
    const [count, setCount] = useState(0);

    //     db.collection("posts").doc().delete()
    //      .then(() => {
    //        console.log("Document successfully deleted!");
    //    }).catch((error) => {
    //        onClick={() => setCount(count + 1)}
    //        console.error("Error removing document: ", error);
    //    });
    return (

        <div class="card" id="postShow">
            <div class="card-body" id="post">
                <h5 class="card-title">Artista</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.mark}</h6>
                <h5 class="card-title">Fecha</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.model}</h6>
                <h5 class="card-title">Descripción</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.description}</h6>
                <button type="button" class="btn btn-primary">Editar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
                <p>Me gusta: {count}</p>
                <button type="button" class="btn btn-outline-success" onClick={() => setCount(count + 1)}>
                    Like
                </button>
            </div>
        </div>
    )
}
export default ShowPost;
