import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as S from "./style";

const Cam = () => {
  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(2);
  const webcamRef = useRef(null);
  const [saveImgs, setSaveImgs] = useState([]);

  const startButtonClick = () => {
    setIsStart(true);
  };
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSaveImgs((prev) => [...prev, imageSrc]);
    if (saveImgs.length < 7) {
      setTimeout(() => {
        setTime(1)
      },1500);
    }
  };
  useEffect(() => {
    console.log(saveImgs);
  }, [saveImgs]);
  useEffect(() => {
    if (isStart && time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    }
    if (time === 0 && isStart) {
      capture();
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
        <>
          <S.Second>{time}</S.Second>
          <S.Count>{saveImgs.length}/8</S.Count>
        </>
      )}
    </S.Layout>
  );
};

export default Cam;
