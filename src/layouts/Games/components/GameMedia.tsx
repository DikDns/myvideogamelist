"use client";

import MediaCarousel from "@/components/Carousel/MediaCarousel";
import ScreenshotSlide from "./ScreenshotSlide";
import { Game } from "@/types/Game";
import VideoSlide from "./VideoSlide";

export default function GameMedia({ game }: { game: Game }) {
  return game.screenshots && game.videos ? (
    <MediaCarousel
      slides={[
        ...game.videos.map((video) => (
          <VideoSlide video={video} key={video.id} />
        )),
        ...game.screenshots.map((screenshot) => (
          <ScreenshotSlide screenshot={screenshot} key={screenshot.id} />
        )),
      ]}
    />
  ) : undefined;
}
