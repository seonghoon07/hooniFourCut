import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as S from "./style";
import useSound from "use-sound";
import shutter from "../../music/shutter.mp3";
import { useAtom } from "jotai";
import { photo } from "../../atoms/photo";

const Cam = ({setPages}) => {
  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(2);
  const webcamRef = useRef(null);
  const [photoes, setPhotoes] = useAtom(photo);
  const [currentImage, setCurrentImage] = useState(null);
  const [soundPlay] = useSound(shutter);

  const startButtonClick = () => {
    setIsStart(true);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhotoes((prev) => [...prev, imageSrc]);
    setCurrentImage(imageSrc);
    soundPlay();
    if (photoes.length < 7) {
      setTimeout(() => {
        setTime(1);
        setCurrentImage(null);
      }, 1500);
    }
    else {
      setTimeout(() => setPages(1),1500)
      
    }
  };

  useEffect(() => {
    console.log(photoes);
  }, [photoes]);

  useEffect(() => {
    if (isStart && time > 0) {
      setTimeout(() => setTime(time - 1), 1500);
    }
    if (time === 0 && isStart) {
      capture();
    }
  }, [isStart, time]);

  const videoConstraints = {
    width: 800,
    height: 500,
    aspectRatio: 16 / 9, // Set your desired aspect ratio here
  };

  return (
    <S.Layout>
      {isStart && (
        <S.CamLayout>
          <S.AllCam>
            <Webcam
              audio={false}
              screenshotFormat="image/jpeg"
              ref={webcamRef}
              videoConstraints={videoConstraints}
            />
            {currentImage && <S.SoonImg src={currentImage} alt="Captured" />}
          </S.AllCam>
        </S.CamLayout>
      )}
      {isStart === false ? (
        <S.StartButton onClick={startButtonClick}>촬영 시작하기</S.StartButton>
      ) : (
        <>
          <S.Second>{time}</S.Second>
          <S.Count>{photoes.length}/8</S.Count>
        </>
      )}
    </S.Layout>
  );
};

export default Cam;
