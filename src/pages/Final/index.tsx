import React, { useCallback, useRef } from "react";
import * as S from "./style";
import { useAtom } from "jotai";
import { atomColor, photo } from "../../atoms/photo";
import selectBackgroundColor from "helper/selectBackgroundColor";
import { toPng } from "html-to-image";

const Final = () => {
  const [finalImg, getFinalImg] = useAtom(photo);
  const [selectedColorIndex, setSelectedColorIndex] = useAtom(atomColor);

  const imgref = useRef(null);

  const onDownloadBtn = useCallback(async () => {
    if (imgref.current === null) return
    try {
      const dataURL = await toPng(imgref.current);
      const link = document.createElement("a");
      link.download = "성훈네컷.png";
      link.href = dataURL;
      link.click();
    } catch (err) {
      console.log(err);
    }
  }, [imgref]);

  return (
    <S.Layout>
      <S.FinalLayout
        backgroundColor={selectBackgroundColor(selectedColorIndex)}
        ref={imgref}
      >
        <S.FinalImgs>
          {finalImg.map((item, index) => (
            <S.FinalImg src={item} key={index} />
          ))}
        </S.FinalImgs>
      </S.FinalLayout>
      <S.Install onClick={onDownloadBtn}>다운로드</S.Install>
    </S.Layout>
  );
};

export default Final;
