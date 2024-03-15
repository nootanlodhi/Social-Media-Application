import axios from "axios"
import { registerUrl, url } from "./apiRoutes"
import { IRegisterPayload } from "../Interface/interface"

export const register = async(payload:IRegisterPayload) =>{
    return await axios.post(url+registerUrl,payload)
}