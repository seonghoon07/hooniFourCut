import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useAtom, useSetAtom } from "jotai";
import { photo } from "../../atoms/photo";

interface ChooseImgProps {
  setPages: React.Dispatch<React.SetStateAction<number>>;
}

const ChooseImg = ({setPages}: ChooseImgProps) => {
  const [getPhotoes, setGetPhotoes] = useAtom(photo);
  const [selectedImg, setSelectedImg] = useState<string[]>([]);
  const [time, setTime] = useState(15);

  const handleImageClick = (item: string) => {
    if (selectedImg.includes(item)) {
      setSelectedImg(selectedImg.filter((i) => i !== item));
    } else {
      if (selectedImg.length < 4)
        setSelectedImg([...selectedImg, item]);
    }
  };

  useEffect(() => {
    if (time > 0) setTimeout(() => setTime(time - 1), 1000);
    if (time === 0) {
      setGetPhotoes(selectedImg)
      setPages(2)
    }
  },[time])
  useEffect(() => {
    console.log(selectedImg)
  },[selectedImg])

  return (
    <S.Layout>
      <S.GetImgsLayout>
        <S.Title>사진을 고르세요</S.Title>
        <S.SelectImgCount>{selectedImg.length}/4</S.SelectImgCount>
        <h1>{time}</h1>
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
    </S.Layout>
  );
};

export default ChooseImg;
