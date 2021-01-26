const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
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
                ...state, users: action.payload
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.payload
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

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
})

export const setTotalUsersCountAC = (total) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: total
})



export default usersReducer