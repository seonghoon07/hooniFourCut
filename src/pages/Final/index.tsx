import React, { useCallback, useRef, useState } from 'react';
import * as S from './style'
import { useAtom } from 'jotai';
import { atomColor, photo } from '../../atoms/photo';
import selectBackgroundColor from 'helper/selectBackgroundColor';
import { toPng } from 'html-to-image';
import QRCode from 'qrcode.react';

const Final = () => {
  const [finalImg,getFinalImg] = useAtom(photo)
  const [selectedColorIndex, setSelectedColorIndex] = useAtom(atomColor);

  const imgref = useRef(null);

  const onDownloadBtn = useCallback(() => {
    if (imgref.current === null) {
      return;
    }

    toPng(imgref.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "성훈네컷.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [imgref]);

  return (
    <S.Layout>
      <S.FinalLayout backgroundColor={selectBackgroundColor(selectedColorIndex)} ref={imgref} >
        <S.FinalImgs>
          {
            finalImg.map((item,index) => (
              <S.FinalImg src={item} key={index} />
            ))
          }
        </S.FinalImgs>
      </S.FinalLayout>
      <QRCode
        value="qr-seonghoon4cut-download"
        size={128}
        level="H"
      />
      <button onClick={onDownloadBtn} >다운로드</button>
    </S.Layout>
  );
};

export default Final;