import React, { useState } from "react";
import FirstCam from "./Cam";
import ChooseImg from "./ChooseImg";
import Final from "./Final";

const Home = () => {
  const [pages,setPages] = useState(0)
  return (
    <>
      {pages === 0 && <FirstCam setPages={setPages} />}
      {pages === 1 && <ChooseImg setPages={setPages} />}
      {pages === 2 && <Final /> }
    </>
  );
};

export default Home;
