import React, { useReducer} from 'react';

import {useRouter} from "next/router";
import postReducer from "./postReducer";
import postContext from "./postContext";
import clienteAxios from "../../config/axios";
import {
    ADD_POST,
    ADD_POST_ERROR,
    ADD_POST_EXITO,
    DELETE_POST,
    GET_POST,
    GET_POST_ERROR,
    GET_POST_EXITO,
    RESET_POST
} from "../types";



const PostState = ({children}) => {

    const router = useRouter();

    // Definir state inicial
    const initialState = {
        posts: [],
        loading: false,
        message: null,
        error: false,
        primeraCarga: true
    };

    // Definir el reducer
    const [state, dispatch] = useReducer(postReducer, initialState);

    const getBlogs = async () => {
        dispatch({
            type:GET_POST
        })
        try {
            const resp = await clienteAxios.get('/posts')
            console.log(resp.data)
            dispatch({
                type: GET_POST_EXITO,
                payload: resp.data
            })
        } catch (e) {
            console.log(e)
            dispatch({
                type: GET_POST_ERROR
            })
        }
        setTimeout(()=>{
            dispatch({
                type: RESET_POST
            })
        },3000)
    }

    const deletePost = async (id) => {
        try {
            const resp = await clienteAxios.delete(`/posts/${id}`);
            console.log(resp)
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        } catch (e) {
            console.log(e)
        }
        setTimeout(()=>{
            dispatch({
                type: RESET_POST
            })
        },2000)
    }

    const addPost = async (post) => {
        dispatch({
            type: ADD_POST
        })
        try {
            const resp = await clienteAxios.post("/posts", post)
            dispatch({
                type: ADD_POST_EXITO,
                payload: resp.data
            })
            router.push("/")
        } catch (e) {
            console.log(e)
            dispatch({
                type: ADD_POST_ERROR
            })
        }
    }

    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                loading: state.loading,
                message: state.message,
                error: state.error,
                primeraCarga: state.primeraCarga,
                getBlogs,
                deletePost,
                addPost
            }}
        >
            {children}
        </postContext.Provider>
    )
}

export default PostState;
