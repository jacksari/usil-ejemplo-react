import {ADD_POST_EXITO, DELETE_POST, GET_POST, GET_POST_ERROR, GET_POST_EXITO, RESET_POST} from "../types";


const postReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST_EXITO:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload),
                message: `El post con el id ${action.payload} se eliminó`
            }
        case RESET_POST:
            return {
                ...state,
                loading: false,
                message: null,
                error: false,
                //primeraCarga: true
            }
        case GET_POST_ERROR:
            return {
                ...state,
                loading: false,
                message: 'Error al cargar posts',
                error: true
            }
        case GET_POST_EXITO:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                message: 'Post cargados correctamente',
                primeraCarga: false
            }
        case GET_POST:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}

export default postReducer;
