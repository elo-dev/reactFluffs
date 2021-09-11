import { ProfileType } from "../types/types"
import { GetItemsType, instance, ResponseType } from "./api"

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get<GetItemsType>(`users/?page=${currentPage}&count=${pageSize}`, {}).then(response => response.data)
    },
    follow(id: number){
        return instance.post<ResponseType>(`follow/${id}`, {}).then(response => response.data)
    },
    unfollow(id: number){
        return instance.delete(`follow/${id}`, {}).then(response => response.data) as Promise<ResponseType>
    },
    getProfile(userId: number){
        return instance.get<ProfileType>(`profile/${userId}`, {}).then(response => response.data)
    }
}