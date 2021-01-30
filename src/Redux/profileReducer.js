import { profileAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
    profile: null,
    posts: [
        { id: 1, post: 'Hi', likes: 12 },
        { id: 2, post: 'How are you?', likes: 5 },
    ],
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                post: action.payload,
                likes: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.payload)
            }

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.payload
            }

        case SET_STATUS:
            return {
                ...state, status: action.payload
            }


        default:
            return state
    }
}

export const addPostActionCreator = (post) => ({
    type: ADD_POST,
    payload: post
})

export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    payload: profile
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    payload: status
})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        const res = await profileAPI.getStatus(userId)
        dispatch(setStatus(res.data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export default profileReducer