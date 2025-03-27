const VideoCard = ({ video }) => {
  const { channelTitle, title, thumbnails } = video.snippet;
  const { viewCount } = video.statistics;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-xl" src={thumbnails.high.url} alt={title} />
      <ul>
        <li className="font-bold py-2">{title}</li>

        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};
export default VideoCard;
