import React, { useEffect, useState } from "react";
import { Video } from "./Video";
import * as videoService from './VideoService'

const VideoList = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await videoService.getVideos()
        setVideos(res.data);
    };

    useEffect(() => {
        loadVideos();
    }, []);

    return (
        <div>
            {videos.map((video) => {
                return (
                    <div>
                        <h1>{video.title}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default VideoList;
