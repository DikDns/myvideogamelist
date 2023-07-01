import ReactPlayer from "react-player/youtube";

interface YoutubePlayer {
  videoId: string;
  className?: string;
  id?: string;
  isLight?: boolean;
  isControlable?: boolean;
  styles?: object;
  width?: string | number;
  height?: string | number;
}

export default function YoutubePlayer({
  videoId,
  className = "",
  id = "",
  isLight = true,
  isControlable = true,
  styles,
  width,
  height,
}: YoutubePlayer) {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      light={isLight}
      controls={isControlable}
      style={styles}
      className={className}
      id={id}
      width={width}
      height={height}
    />
  );
}
