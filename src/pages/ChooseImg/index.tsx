import React from "react";
import * as S from "./style";
import { useAtom } from "jotai";
import { photo } from "../../atoms/photo";

const ChooseImg = () => {
  const [getPhotoes, setGetPhotoes] = useAtom(photo);
  console.log(getPhotoes);
  return (
    <S.Layout>
      <S.GetImgsLayout>
      <S.Title>사진을 고르세요</S.Title>
        <S.GetImgs>
          {getPhotoes.map((item, index) => (
            <S.GetImg src={item} key={index} />
          ))}
        </S.GetImgs>
      </S.GetImgsLayout>
    </S.Layout>
  );
};

export default ChooseImg;
