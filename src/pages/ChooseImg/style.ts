import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const GetImgsLayout = styled.div`
  width: 850px;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;
export const TextLayout = styled.div`
  display: flex;
  gap: 30px;
  position: absolute;
  left: 5%;
  top: 5%;
`;
export const GetImg = styled.img<{ selected: boolean }>`
  width: 200px;
  transform: scaleX(-1);
  border: ${(props) =>
    props.selected ? "3px solid black" : "3px solid transparent"};
  box-sizing: border-box;
`;
export const GetImgs = styled.div`
  display: flex;
  gap: 10px;
  width: 850px;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  top: 20%;
`;
export const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 10%;
  font-size: 30px;
`;
export const SelectImgCount = styled.h1`
  font-size: 40px;
`;
export const ChooseTime = styled.h1`
  font-size: 40px;
`;
export const PreviewLayout = styled.div`
  width: 240px;
  height: 630px;
  display: flex;
  justify-content: center;
`;
export const FinalLayout = styled.div<{ backgroundColor: string}>`
  height: 567px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${(props) => props.backgroundColor};
`;
export const FinalImgs = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FinalImg = styled.img`
  transform: scaleX(-1);
`;
export const NameLayout = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.h3<{ color: string }>`
  color: ${(props) => props.color};
`;
export const DevideLine = styled.hr`
  position: absolute;
  top: 65%;
  width: 95%;
`;
export const ChooseColor = styled.div`
  position: absolute;
  top: 67%;
  width: 90%;
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const ColorBox = styled.div`
  width: 148px;
  height: 52px;
  background-color: black;
  &:nth-child(1) {
    background-color: #000000;
  }
  &:nth-child(2) {
    background-color: #6e6e6e;
  }
  &:nth-child(3) {
    background-color: #a4a4a4;
  }
  &:nth-child(4) {
    background-color: #ffffff;
  }
  &:nth-child(5) {
    background-color: #0b173b;
  }
  &:nth-child(6) {
    background-color: #f5a9f2;
  }
  &:nth-child(7) {
    background-color: #ceecf5;
  }
  &:nth-child(8) {
    background-color: #ece0f8;
  }
`;
