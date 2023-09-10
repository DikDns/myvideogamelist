"use client";

import dynamic from "next/dynamic";
import { BaseReactPlayerProps } from "react-player/base";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import PlayCircle from "@mui/icons-material/PlayCircleFilledTwoTone";

interface YoutubePlayer extends BaseReactPlayerProps {
  videoId: string;
  isLight?: boolean;
  isControlable?: boolean;
}

export default function YoutubePlayer({
  videoId,
  className = undefined,
  id = undefined,
  isLight = true,
  isControlable = true,
  styles,
  width,
  height,
  fallback = undefined,
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
      fallback={fallback}
      playIcon={<PlayCircle fontSize="large" className="play-icon" />}
    />
  );
}
