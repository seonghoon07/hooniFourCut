import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useAtom, useSetAtom } from "jotai";
import ChooseImgProps from "interfaces/ChooseImgProps";
import { photo } from "atoms/photo";

const ChooseImg = ({ setPages }: ChooseImgProps) => {
  const [getPhotoes, setGetPhotoes] = useAtom(photo);
  const [selectedImg, setSelectedImg] = useState<string[]>([]);
  const [time, setTime] = useState(15);

  const handleImageClick = (item: string) => {
    if (selectedImg.includes(item)) {
      setSelectedImg(selectedImg.filter((i) => i !== item));
    } else {
      if (selectedImg.length < 4) setSelectedImg([...selectedImg, item]);
    }
  };

  const getRandomElements = (list: string[], roof: number) => {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, roof);
  };

  useEffect(() => {
    if (time > 0) setTimeout(() => setTime(time - 1), 1000);
    if (time === 0) {
      if (selectedImg.length === 4) {
        setGetPhotoes(selectedImg);
      } else if (selectedImg.length === 0) {
        const randomPhotoes = getRandomElements(getPhotoes, 4);
        setGetPhotoes(randomPhotoes);
      } else if (selectedImg.length === 1) {
        const randomPhotoes = getRandomElements(getPhotoes, 3);
        setGetPhotoes(randomPhotoes);
      }
      setPages(2);
    }
  }, [time]);
  useEffect(() => {
    console.log(selectedImg);
  }, [selectedImg]);

  return (
    <S.Layout>
      <S.GetImgsLayout>
        <S.Title>사진을 고르세요</S.Title>
        <S.SelectImgCount>{selectedImg.length}/4</S.SelectImgCount>
        <S.ChooseTime>{time}초</S.ChooseTime>
        <S.GetImgs>
          {getPhotoes.map((item, index) => (
            <S.GetImg
              src={item}
              key={index}
              onClick={() => handleImageClick(item)}
              selected={selectedImg.includes(item)}
              alt={`Image ${index}`}
            />
          ))}
        </S.GetImgs>
      </S.GetImgsLayout>
      <S.PreviewLayout>
        <S.FinalLayout>
          <S.NameLayout>
            <S.Name>성훈네컷</S.Name>
          </S.NameLayout>
          <S.FinalImgs>
            {selectedImg.map((item, index) => (
              <S.FinalImg src={item} key={index} />
            ))}
          </S.FinalImgs>
        </S.FinalLayout>
      </S.PreviewLayout>
    </S.Layout>
  );
};

export default ChooseImg;
