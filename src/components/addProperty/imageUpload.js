import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ImageUpload = () => {
  //   const [selectedImage, setSelectedImage] = useState([]);
  //   const [imageUrl, setImageUrl] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const setMultipleImages = (event) => {
    console.log("event", event.target.files[0]);
    // setSelectedImage([...selectedImage, event.target.files[0]]);
    setSelectedImage(event.target.files[0]);
  };
  //   useEffect(() => {
  //     if (selectedImage.length < 1) return;
  //     const newImageUrls = [];
  //     selectedImage.forEach((image) =>
  //       newImageUrls.push(URL.createObjectURL(image))
  //     );
  //     setImageUrl([...imageUrl, newImageUrls]);
  //   }, [selectedImage]);
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  console.log("imageUrl", imageUrl);
  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setMultipleImages(e)}
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>

      {/* <Box mt={2} textAlign="center">
        <div>Image Preview:</div>
        {imageUrl &&
          imageUrl.map((item) => {
            console.log("item in imageUrl", item[0]);
            <img src={item[0]} alt={item.name} height="100px" />;
          })}
      </Box> */}

      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>

          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </Box>
      )}
    </>
  );
};

export default ImageUpload;
