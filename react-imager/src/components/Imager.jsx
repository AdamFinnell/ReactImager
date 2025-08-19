import React, { useState } from "react";
import Display from "./Display";
import Thumbnail from "./Thumbnail";

export default function Imager() {
  // paths to your 12 images in /public/images
  const images = [
    "public/images/alice.jpg",
    "public/images/anime.jpg",
    "public/images/beach.jpg",
    "public/images/clouds.jpg",
    "public/images/eye.jpg",
    "public/images/halo.jpg",
    "public/images/kids.jpg",
    "public/images/nebula.jpg",
    "public/images/peacock.jpg",
    "public/images/rename.jpg",
    "public/images/tree.jpg",
    "public/images/face.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showRandom = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentIndex(randomIndex);
  };

  const goForward = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goBackward = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Display src={images[currentIndex]} />
      <div style={{ margin: "20px" }}>
        <button onClick={goBackward}>⬅ Back</button>
        <button onClick={showRandom} style={{ margin: "0 10px" }}>
          🎲 Random
        </button>
        <button onClick={goForward}>Next ➡</button>
      </div>
      <Thumbnail
        images={images}
        onThumbnailClick={handleThumbnailClick}
        currentIndex={currentIndex}
      />
    </div>
  );
}
