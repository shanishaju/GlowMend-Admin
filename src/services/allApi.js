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
