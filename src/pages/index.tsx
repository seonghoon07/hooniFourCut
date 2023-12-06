import React, { useState } from "react";
import FirstCam from "./Cam";
import ChooseImg from "./ChooseImg";

const Home = () => {
  const [pages,setPages] = useState(0)
  return (
    <>
      {pages === 0 && <FirstCam setPages={setPages} />}
      {pages === 1 && <ChooseImg />}
    </>
  );
};

export default Home;
