import axios from "axios"
import { loginUrl, registerUrl, url } from "./apiRoutes"
import { ILoginPayload, IRegisterPayload } from "../Interface/interface"

export const register = async(payload:IRegisterPayload) =>{
    return await axios.post(url+registerUrl,payload)
}

export const login = async(payload:ILoginPayload) =>{
    return await axios.post(url+loginUrl,payload)
}