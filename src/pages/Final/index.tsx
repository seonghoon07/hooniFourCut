import React, { useState } from 'react';
import * as S from './style'
import { useAtom } from 'jotai';
import { atomColor, photo } from '../../atoms/photo';
import selectBackgroundColor from 'helper/selectBackgroundColor';

const Final = () => {
  const [finalImg,getFinalImg] = useAtom(photo)
  const [selectedColorIndex, setSelectedColorIndex] = useAtom(atomColor);

  return (
    <S.Layout>
      <S.FinalLayout backgroundColor={selectBackgroundColor(selectedColorIndex)} >
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