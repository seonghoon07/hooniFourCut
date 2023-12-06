import React, { useState } from "react";
import * as S from "./style";
import { useAtom, useSetAtom } from "jotai";
import { photo } from "../../atoms/photo";

const ChooseImg = () => {
  const [getPhotoes, setGetPhotoes] = useAtom(photo);
  const [selectedImg, setSelectedImg] = useState<number[]>([]);
  const handleImageClick = (index: number) => {
    if (selectedImg.includes(index)) {
      setSelectedImg(selectedImg.filter((i) => i !== index));
    } else {
      if (selectedImg.length < 4)
        setSelectedImg([...selectedImg, index]);
    }
  };
  return (
    <S.Layout>
      <S.GetImgsLayout>
        <S.Title>사진을 고르세요</S.Title>
        <S.GetImgs>
          {getPhotoes.map((item, index) => (
            <S.GetImg
              src={item}
              key={index}
              onClick={() => handleImageClick(index)}
              selected={selectedImg.includes(index)}
              alt={`Image ${index}`}
            />
          ))}
        </S.GetImgs>
      </S.GetImgsLayout>
    </S.Layout>
  );
};

export default ChooseImg;
