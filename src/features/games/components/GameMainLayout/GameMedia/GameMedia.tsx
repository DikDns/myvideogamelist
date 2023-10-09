"use client";

import { useContext } from "react";
import CarouselMedia from "../../Carousel/CarouselMedia";
import { GameContext } from "../../GameLayout";
import Game from "../../../types/Game";
import GameSlideImage from "./GameSlideImage";
import GameSlideVideo from "./GameSlideVideo";

export default function GameMedia() {
  const game = useContext(GameContext) as Game;

  return <CarouselMedia slides={setMediaSlides(game)} />;
}

function setMediaSlides(game: Game) {
  const slides = [];

  if (game.videos) {
    slides.push(
      ...game.videos.map((video) => (
        <GameSlideVideo key={video.id} video={video} />
      ))
    );
  }

  if (game.screenshots) {
    slides.push(
      ...game.screenshots.map((screenshot) => (
        <GameSlideImage
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
        <GameSlideImage
          key={artwork.id}
          game={game}
          image={artwork}
          imageType="artwork"
        />
      ))
    );
  }

  if (slides.length < 1) {
    slides.push(<GameSlideImage isNotFound />);
  }

  return slides;
}
