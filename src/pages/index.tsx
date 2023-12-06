import React, { useState } from "react";
import FirstCam from "./Cam";

const Home = () => {
  const [pages,setPages] = useState(0)
  return (
    <>
      {pages === 0 && <FirstCam setPages={setPages} />}
      {pages === 1 && null}
    </>
  );
};

export default Home;
