import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as S from "./style";
import useSound from "use-sound";
import shutter from "music/shutter.mp3";
import { useAtom } from "jotai";
import { photo } from "atoms/photo";
import ChooseImgProps from "interfaces/ChooseImgProps";

const Cam = ({ setPages }: ChooseImgProps) => {
  const [photoes, setPhotoes] = useAtom(photo);
  const [soundPlay] = useSound(shutter);

  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(2);
  const [currentImage, setCurrentImage] = useState("");
  
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 800,
    height: 500,
    aspectRatio: 16 / 9,
  };

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (typeof imageSrc === "string") {
      setPhotoes((prev) => [...prev, imageSrc]);
      setCurrentImage(imageSrc);
      soundPlay();
      if (photoes.length < 7) {
        setTimeout(() => {
          setTime(1);
          setCurrentImage("");
        }, 1500);
      } else {
        setTimeout(() => setPages(1), 1500);
      }
    }
  };

  useEffect(() => {
    if (isStart && time > 0) {
      setTimeout(() => setTime(time - 1), 1500);
    }
    if (time === 0 && isStart) {
      capture();
    }
  }, [isStart, time]);

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
        <S.StartButton onClick={() => setIsStart(true)}>
          촬영 시작하기
        </S.StartButton>
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
