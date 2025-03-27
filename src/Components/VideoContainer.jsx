import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
// import axios from "axios";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);

    const json = await data.json();

    // const json = await axios.get(YOUTUBE_VIDEO_API);
    setVideos(json.items);
    // console.log(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard video={video} />
          </Link>
        );
      })}
    </div>
  );
};
export default VideoContainer;
