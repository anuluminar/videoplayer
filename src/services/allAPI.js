import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// to upload a new video
export const uploadAllVideo = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}video`,reqBody);
}

// to get all videos alrady inserted

 export const getAllVideos = async ()=>{
    return await commonAPI('GET',`${serverURL}video`,"")
 }

 // to delete a specific video
 export const deleteVideo=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}video/${id}`,{})
 }

 // add details to watch history

 export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}history`,videoDetails)
 }

 // get all details of whatch History

 export const getHistory = async()=>{
    return await commonAPI('GET',`${serverURL}history`,"")
 }