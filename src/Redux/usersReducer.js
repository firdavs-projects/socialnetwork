import { usersAPI } from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.payload, 'id', { followed: true })

                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.payload, 'id', { followed: false })

                users: state.users.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: false }
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

        case TOOGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.payload
            }

        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)

            }

        default:
            return state
    }
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setFollowingInProgress(false, userId))
}

export const follow = (userId) => ({
    type: FOLLOW,
    payload: userId
})

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    payload: userId
})

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
})

export const setTotalUsersCount = (total) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: total
})

export const setIsFetching = (isFetching) => ({
    type: TOOGLE_IS_FETCHING,
    payload: isFetching
})

export const setFollowingInProgress = (isFetching, userId) => ({
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    payload: { isFetching, userId }
})

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(setIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setIsFetching(false))
    }
}

export const unfollowUser = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.unFollow.bind(usersAPI)
        const actionCreator = unfollow
        followUnfollow(dispatch, userId, apiMethod, actionCreator)
    }
}

export const followUser = (userId) => {
    return async (dispatch) => {
        const apiMethod = usersAPI.follow.bind(usersAPI)
        const actionCreator = follow
        followUnfollow(dispatch, userId, apiMethod, actionCreator)
    }
}

export default usersReducer