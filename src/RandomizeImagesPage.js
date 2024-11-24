import React, { useState } from "react";

const RandomizeImagesPage = () => {
  const [images, setImages] = useState([]);
  const [randomImage, setRandomImage] = useState(null);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 40) {
      alert("You can only upload up to 40 images!");
      return;
    }
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const pickRandomImage = () => {
    if (images.length === 0) {
      alert("No images to pick from!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  };

  const clearAll = () => {
    setImages([]);
    setRandomImage(null); // Clear the randomized image
  };

  const closeDialog = () => setRandomImage(null);

  return (
    <div className="container">
      <h1>Randomize Images</h1>
      <label
        className="upload-area"
        style={{
          padding: "20px",
          border: "2px dashed #007BFF",
          borderRadius: "10px",
          cursor: "pointer",
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        Upload Images
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </label>
      {images.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={pickRandomImage}>Pick Randomly</button>
          <button
            onClick={clearAll}
            style={{
              marginLeft: "10px",
              backgroundColor: "red",
              color: "white",
            }}
          >
            Clear All
          </button>
        </div>
      )}
      <div className="grid" style={{ marginTop: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Uploaded ${index}`}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        ))}
      </div>
      {randomImage && (
        <div
          className="dialog"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            borderRadius: "10px",
            zIndex: 1000,
            textAlign: "center",
            maxWidth: "80vw", // Limit dialog width
            maxHeight: "80vh", // Limit dialog height
          }}
        >
          <img
            src={randomImage}
            alt="Randomized"
            style={{
              maxWidth: "100%",
              maxHeight: "50vh", // Ensure the image doesn't dominate the page
              borderRadius: "10px",
            }}
          />
          <div style={{ marginTop: "20px" }}>
            <button onClick={closeDialog} style={{ marginRight: "10px" }}>
              Cancel
            </button>
            <button onClick={pickRandomImage}>Pick Again</button>
          </div>
        </div>
      )}
      {randomImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={closeDialog} // Close dialog when clicking outside the image
        />
      )}
    </div>
  );
};

export default RandomizeImagesPage;