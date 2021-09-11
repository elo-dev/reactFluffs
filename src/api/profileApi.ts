import { PhotosType, ProfileType } from "../types/types"
import { instance, ResponseType } from "./api"

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getStatus(userId: number){
        return instance.get<string>(`profile/status/${userId}`).then(response => response.data)
    },
    updataStatus(status: string){
        return instance.put<ResponseType>(`profile/status`, {status: status})
    },
    savePhoto(photoFile: any){
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfile(profile: ProfileType){
        return instance.put(`profile`, profile)
    }
}