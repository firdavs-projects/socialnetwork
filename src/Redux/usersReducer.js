const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: !u.followed }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.payload]
            }

        default:
            return state
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    payload: userId
})

export const setUsersAC = (users) => ({
    type: SET_USERS,
    payload: users

})



export default usersReducer