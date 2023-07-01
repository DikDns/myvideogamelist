import Iframe from "react-iframe";

interface YoutubeIframe {
  videoId: string;
  title?: string;
  className?: string;
  id?: string;
  allow?: string;
  allowFullScreen?: boolean;
  styles?: object;
  width?: string;
  height?: string;
}

export default function YoutubeIframe({
  videoId,
  title,
  className = "",
  id = "",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  styles,
  width,
  height,
}: YoutubeIframe) {
  return (
    <Iframe
      url={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      styles={styles}
      className={className}
      id={id}
      allow={allow}
      width={width}
      height={height}
    />
  );
}
