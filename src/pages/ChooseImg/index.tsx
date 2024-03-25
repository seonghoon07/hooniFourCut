import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useAtom } from "jotai";
import ChooseImgProps from "interfaces/ChooseImgProps";
import selectBackgroundColor from "helper/selectBackgroundColor";
import { atomColor, photo } from "atoms/photo";

const ChooseImg = ({ setPages }: ChooseImgProps) => {
  const [getPhotoes, setGetPhotoes] = useAtom(photo);
  const [selectedImgs, setSelectedImgs] = useState<string[]>([]);
  const [time, setTime] = useState(15);
  const [selectedColorIndex, setSelectedColorIndex] = useAtom(atomColor);
  const color = [
    "black",
    "gray",
    "lightgray",
    "white",
    "blue",
    "pink",
    "skyblue",
    "lightpurple",
  ];

  // item은 사진링크
  const handleImageClick = (item: string) => {
    if (selectedImgs.includes(item)) {
      setSelectedImgs(selectedImgs.filter((i) => i !== item));
    } else {
      if (selectedImgs.length < 4) setSelectedImgs([...selectedImgs, item]);
    }
  };

  // 사진 랜덤으로 섞어주는 함수
  const getRandomElements = (list: string[], roof: number) => {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, roof);
  };

  useEffect(() => {
    if (time > 0) setTimeout(() => setTime(time - 1), 1000);
    if (time === 0) {
      if (selectedImgs.length === 4) {
        setGetPhotoes(selectedImgs);
      } else if (selectedImgs.length === 0) {
        const randomPhotoes = getRandomElements(getPhotoes, 4);
        setGetPhotoes(randomPhotoes);
      } else if (selectedImgs.length === 1) {
        const randomPhotoes = getRandomElements(getPhotoes, 3);
        setGetPhotoes(randomPhotoes);
      } else if (selectedImgs.length === 2) {
        const randomPhotoes = getRandomElements(getPhotoes, 2);
        setGetPhotoes(randomPhotoes);
      } else if (selectedImgs.length === 3) {
        const randomPhotoes = getRandomElements(getPhotoes, 1);
        setGetPhotoes(randomPhotoes);
      }
      setPages(2);
    }
  }, [time]);

  return (
    <S.Layout>
      <S.GetImgsLayout>
        <S.TextLayout>
          <S.SelectImgCount>{selectedImgs.length}/4</S.SelectImgCount>
          <S.ChooseTime>{time}초</S.ChooseTime>
        </S.TextLayout>
        <S.Title>사진을 고르세요</S.Title>
        <S.GetImgs>
          {getPhotoes.map((item, index) => (
            <S.GetImg
              src={item}
              key={index}
              onClick={() => handleImageClick(item)}
              selected={selectedImgs.includes(item)}
              alt={`Image ${index}`}
            />
          ))}
        </S.GetImgs>
        <S.DevideLine></S.DevideLine>
        <S.ChooseColor>
          {color.map((item, index) => {
            return (
              <S.ColorBox
                onClick={() => setSelectedColorIndex(index)}
              ></S.ColorBox>
            );
          })}
        </S.ChooseColor>
      </S.GetImgsLayout>
      <S.PreviewLayout>
        <S.FinalLayout
          backgroundColor={selectBackgroundColor(selectedColorIndex)}
        >
          <S.FinalImgs>
            {selectedImgs.map((item, index) => (
              <S.FinalImg src={item} key={index} />
            ))}
          </S.FinalImgs>
        </S.FinalLayout>
      </S.PreviewLayout>
    </S.Layout>
  );
};

export default ChooseImg;
