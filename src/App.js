import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  useEffect(() => {
    console.log("useEffect called");
  },[]);

  console.log("Component rendering");

  return(
    <div>
      <DogPics />
    </div>
  ) 
}

export default App;
