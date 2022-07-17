import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  const [images, setImages] = useState([]);
  const [count, setCount]  = useState(0)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        setImages(data.message);
      });
  },[]);

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img src={image} key={image}  alt={"new dog"}/>
      ))}
      <button onClick={() => setCount( count => count + 1)}>click me :{count}</button>
    </div>
  );
}

export default DogPics;
