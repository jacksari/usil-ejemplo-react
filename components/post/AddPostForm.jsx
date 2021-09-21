import React, { useState, useContext } from 'react';
import postContext from "../../context/post/postContext";

function AddPostForm(props) {
    const [title, setTittle] = useState('');
    const [body, setBody] = useState('');
    const { addPost } = useContext(postContext)

    // Cuando el usuario haga submit
    const submitNuevoBlog = (e) => {
        e.preventDefault();
        // Validar formulario
        if (title.trim() === '' || body.trim() === '') {
            return;
        }

        // Si no hay errores

        // Crear el nuevo blog
        addPost({
            title, body
        })
    };

    return (
        <form
            className="form-blog"
            onSubmit={submitNuevoBlog}
        >
            <div className="form-control">
                <label htmlFor="title">Título</label>
                <input
                    id="title"
                    type="text"
                    className="input"
                    placeholder="Ingrese título"
                    value={title}
                    onChange={(e) => setTittle(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="description">Descripción</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="input"
                    name="body"
                    id="body"
                    cols="30"
                    rows="10"
                    placeholder="Ingrese descripción"
                />
            </div>
            <button type="submit" className="btn">Agregar blog</button>
        </form>
    );
}

export default AddPostForm;
