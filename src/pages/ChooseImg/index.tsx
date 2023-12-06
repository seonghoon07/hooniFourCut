import React from 'react';
import * as S from "./style"
import { useAtom } from 'jotai';
import { photo } from '../../atoms/photo';

const ChooseImg = () => {
  const [getPhotoes,setGetPhotoes] = useAtom(photo)
  console.log(getPhotoes)
  return (
    <S.Layout>
      
    </S.Layout>
  );
};

export default ChooseImg;