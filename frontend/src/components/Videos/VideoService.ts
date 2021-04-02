import axios from "axios";
import { Video } from "./Video";

const API = 'http://localhost:3000'

export const getVideos = async() => {
    return await axios.get(`${API}/videos`);
}

export const createVideo = async(video: Video) => {
    return await axios.post(`${API}/videos`, video);
}