import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as S from "./style";

const FirstCam = () => {
  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(10);

  const startButtonClick = () => {
    setIsStart(true);
  };

  useEffect(() => {
    if (isStart && time > 0) {
      setTimeout(() => setTime(time - 1), 1000)
    }
  },[isStart,time])

  return (
    <S.Layout>
      {isStart && (
        <S.CamLayout>
          <Webcam width={700} />
        </S.CamLayout>
      )}
      {isStart === false ? (
        <S.StartButton onClick={startButtonClick}>촬영 시작하기</S.StartButton>
      ) : <S.Count>{time}</S.Count>}
    </S.Layout>
  );
};

export default FirstCam;
