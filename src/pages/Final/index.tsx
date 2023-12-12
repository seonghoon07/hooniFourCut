import React from 'react';
import * as S from './style'
import { useAtom } from 'jotai';
import { photo } from '../../atoms/photo';

const Final = () => {
  const [finalImg,getFinalImg] = useAtom(photo)
  return (
    <S.Layout>
      <S.FinalLayout>
        <S.NameLayout>
          <S.Name>성훈네컷</S.Name>
        </S.NameLayout>
        <S.FinalImgs>
          {
            finalImg.map((item,index) => (
              <S.FinalImg src={item} key={index} />
            ))
          }
        </S.FinalImgs>
      </S.FinalLayout>
    </S.Layout>
  );
};

export default Final;