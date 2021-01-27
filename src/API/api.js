import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "8ac421a0-04c1-432d-80ca-1dcc953182a0"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`,)
            .then(res => res.data)
    },
    unFollow(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(res => res.data)
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
            .then(res => res.data)
    },
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId ? userId : 2}`)
            .then(res => res.data)
    }
}