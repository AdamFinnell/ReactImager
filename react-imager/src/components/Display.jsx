import React from "react";

export default function Display({ src }) {
    return (
        <div style={{ margin: "20px 0" }} className="display-img">
            <img
                src={src}
                alt="Large display"
                style={{ width: "400px", height: "300px", objectFit: "cover" }}
            />
        </div>
    );
}
