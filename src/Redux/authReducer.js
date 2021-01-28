import { profileAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        case SET_LOGIN_DATA: {
            return {
                ...state,
                isAuth: true
            }
        }

        default:
            return state
    }
}

export const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login }
})

const setLoginData = () => ({
    type: SET_LOGIN_DATA,
})

export const authMe = () => {
    return (dispatch) => {
        profileAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    const { id, login, email } = data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }
}

export const loginMe = (formData) => {
    return (dispatch) => {
        profileAPI.login(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setLoginData())
                }
            })
    }
}


export default authReducer