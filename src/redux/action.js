import {ADD_POSTS , ADD_LIKE ,ADD_COMMENT,ADD_SHARE} from "./types";


export const addPost = (text , link, nick) => {
    return{
        type: ADD_POSTS,
        payload : {text , link, nick}
    }
}
export const addLike = (like, id , act) => {
    return{
        type: ADD_LIKE,
        payload : {like ,id ,act}
    }
}
export const addComment= (comment, id , act) => {
    return{
        type: ADD_COMMENT,
        payload : {comment ,id , act}
    }
}
export const addShare= (share, id , act) => {
    return{
        type: ADD_SHARE,
        payload : {share ,id , act}
    }
}
