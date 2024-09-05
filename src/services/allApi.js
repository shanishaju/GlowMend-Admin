import { common } from "@mui/material/colors"
import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"





//add product api
export const addProductApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/addproduct`,reqBody,reqHeader)
}


//get product api
export const allProductApi = async()=>{
    return await commonApi('GET',`${serverUrl}/allproducts`,"","")
}

//delete product api

export const deleteProductApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete/${id}`,{},"")
}

//edit 
export const editProjectApi = async (id, reqBody) => {
    return await commonApi('PUT', `${serverUrl}/editproject/${id}`, reqBody, "")
}