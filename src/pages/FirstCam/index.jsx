import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as S from "./style";

const FirstCam = () => {
  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(5);
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const startButtonClick = () => {
    setIsStart(true);
  };
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  useEffect(() => {
    if (isStart && time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    }
    if (time === 0) {
        capture()
    }
  }, [isStart, time]);

  return (
    <S.Layout>
      {isStart && (
        <S.CamLayout>
          <Webcam
            width={700}
            audio={false}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
          />
        </S.CamLayout>
      )}
      {isStart === false ? (
        <S.StartButton onClick={startButtonClick}>촬영 시작하기</S.StartButton>
      ) : (
        <S.Count>{time}</S.Count>
      )}
      {imgSrc && <S.Img src={imgSrc} alt="Captured" />}
    </S.Layout>
  );
};

export default FirstCam;
