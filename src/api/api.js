import axios from "axios";

let instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "b151f5ea-fa2d-44c9-b575-b3ae4e551faa"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data)
    },
    follow(id){
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`, {}).then(response => response.data)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`, {}).then(response => response.data)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`, {}).then(response => response.data)
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`).then(response => response.data)
    }
}

export const profileAPI = {
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updataStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}