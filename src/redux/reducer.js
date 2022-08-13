import {ADD_POSTS, ADD_LIKE ,ADD_COMMENT,ADD_SHARE} from "./types";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const RAY_AVATAR = 'data:image/jpeg;base64,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'
const ANAKIN_AVATAR = 'https://i.insider.com/56819d57e6183e263a8b5041?width=1000&format=jpeg&auto=webp'
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const postsData = [
    {
        id: 1,
        author: {
            name: "Anakin Skywalker",
            photo: ANAKIN_AVATAR,
            nickname: "@dart_vader",
        },
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: RAY_IMAGE,
        date: "28 лютого",
        like: random(0, 1000),
        comment: random(0, 1000),
        share : random(0, 1000),
    },
    {
        id: 2,
        author: {
            name: "Rey Skywalker",
            photo: RAY_AVATAR,
            nickname: "@ray",
        },
        content: "Everything you do, everywhere you go, you have the hope of a galaxy with you.",
        image: RAY_IMAGE,
        date: "28 лютого",
        like: random(0, 1000),
        comment: random(0, 1000),
        share : random(0, 1000),

    },


]

let id = 3;
export const posts = (state = postsData, action) => {
    switch (action.type) {
        case ADD_POSTS:
            let user = postsData.find(user => user.author.nickname === action.payload.nick)
            state.push({
                id: ++id,
                author: {
                    name: user.author.name,
                    photo: user.author.photo,
                    nickname: user.author.nickname,
                },
                content: action.payload.text,
                image: `${action.payload.link}`,
                date: "28 лютого",
                like: random(0, 1000),
                comment: random(0, 1000),
                share : random(0, 1000),
            })
            return [...state]
        case ADD_LIKE:
            let userLike = postsData.find(user => user.id === action.payload.id)

            userLike.like = (action.payload.act)? userLike.like + 1 : userLike.like - 1;
            return postsData
        case ADD_COMMENT:
            let userComment = postsData.find(user => user.id === action.payload.id)
            userComment.comment = (action.payload.act)?  userComment.comment + 1 : userComment.comment- 1;
            return postsData
        case ADD_SHARE:
            let userShare = postsData.find(user => user.id === action.payload.id)
            userShare.share = (action.payload.act)?  userShare.share + 1 : userShare.share- 1;
            return postsData
    }
    return state;
}
