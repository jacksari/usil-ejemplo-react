import React, { useContext } from 'react';
import postContext from "../../context/post/postContext";

function PostItem({post}) {
    const { title, body, id } = post;
    const { deletePost } = useContext(postContext)
    return (
        <article className="blog">
            <div className="blog-head">
                <h2>{ title }</h2>
            </div>
            <div className="blog-body">
                <p>{ body }</p>
            </div>
            <div className="blog-footer">
                {/*
                <button className="btn btn-blog btn-success">Editar</button>
                */}
                <button onClick={()=>deletePost(id)} className="btn btn-blog btn-danger">Eliminar</button>
            </div>
        </article>
    );
}

export default PostItem;
