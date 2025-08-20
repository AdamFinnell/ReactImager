import React from "react"

export default function Thumbnail({ images, onThumbnailClick, currentIndex }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => onThumbnailClick(index)}
                    className={currentIndex === index ? "active" : ""}
                    style={{
                        width: "80px",
                        height: "60px",
                        margin: "5px",
                        cursor: "pointer",
                        objectFit: "cover",
                    }}
                />

            ))}
        </div>
    )
}
