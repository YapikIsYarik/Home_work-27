import {ADD_POSTS} from "./types";


export const addPost = (text , link, nick) => {
    return{
        type: ADD_POSTS,
        payload : {text , link, nick}
    }
}