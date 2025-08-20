import React, { useState } from "react"
import Display from "./Display"
import Thumbnail from "./Thumbnail"

export default function Imager() {

    const images = [
        "images/halo.jpg",
        "images/alice.jpg",
        "images/anime.jpg",
        "images/beach.jpg",
        "images/clouds.jpg",
        "images/eye.jpg",
        "images/kids.jpg",
        "images/nebula.jpg",
        "images/peacock.jpg",
        "images/rename.jpg",
        "images/tree.jpg",
        "images/face.jpg"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const showRandom = () => {
        const randomIndex = Math.floor(Math.random() * images.length)
        setCurrentIndex(randomIndex)
    }

    const goForward = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const goBackward = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <Display src={images[currentIndex]} />
            <div style={{ margin: "20px" }}>
                <button onClick={goBackward}>Back</button>
                <button onClick={showRandom} style={{ margin: "0 10px" }}>
                    Random
                </button>
                <button onClick={goForward}>Next</button>
            </div>
            <Thumbnail
                images={images}
                onThumbnailClick={handleThumbnailClick}
                currentIndex={currentIndex}
            />
        </div>
    )
}
