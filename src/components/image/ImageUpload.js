import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageStyle = {
    width: "150px",
    height: "200px",
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file));
      console.log("slected Image", selectedImage);
    } else {
      setSelectedImage(null);
      alert("Please select a valid image file.");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Uploaded" style={imageStyle} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
