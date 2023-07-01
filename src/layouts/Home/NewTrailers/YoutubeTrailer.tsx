"use client";

import Iframe from "react-iframe";

const iframeStyle = {
  marginRight: "8px",
  marginLeft: "8px",
  flex: "0 0 auto",
  minWidth: "0",
  maxWidth: "100%",
  width: "400px",
  height: "225px",
};

export default function YoutubeTrailer({
  videoId,
  title,
  className = "",
  id = "",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
}: {
  videoId: string;
  title?: string;
  className?: string;
  id?: string;
  allow?: string;
  allowFullScreen?: boolean;
}) {
  return (
    <Iframe
      url={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      styles={iframeStyle}
      className={className}
      id={id}
      allow={allow}
    />
  );
}
