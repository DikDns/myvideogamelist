"use client";

import { Game } from "@/types/Game";
import MediaCarousel from "@/components/Carousel/MediaCarousel";
import ImageSlide from "./ImageSlide";
import VideoSlide from "./VideoSlide";

function setMediaSlides(game: Game) {
  const slides = [];

  if (game.videos) {
    slides.push(
      ...game.videos.map((video) => <VideoSlide key={video.id} video={video} />)
    );
  }

  if (game.screenshots) {
    slides.push(
      ...game.screenshots.map((screenshot) => (
        <ImageSlide
          key={screenshot.id}
          game={game}
          image={screenshot}
          imageType="screenshot"
        />
      ))
    );
  }

  if (game.artworks) {
    slides.push(
      ...game.artworks.map((artwork) => (
        <ImageSlide
          key={artwork.id}
          game={game}
          image={artwork}
          imageType="artwork"
        />
      ))
    );
  }

  return slides;
}

export default function GameMedia({ game }: { game: Game }) {
  return <MediaCarousel slides={setMediaSlides(game)} />;
}
