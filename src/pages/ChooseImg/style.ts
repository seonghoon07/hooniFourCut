import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GetImgsLayout = styled.div`
  width: 1300px;
  height: 600px;
  position: relative;
  background-color: rgba(0,0,0,0.5);
  color: white;
  border-radius: 10px;
`
export const GetImg = styled.img<{ selected: boolean }>`
  width: 300px;
  transform: scaleX(-1);
  border: ${(props) => (props.selected ? "3px solid black" : "3px solid transparent")};
  box-sizing: border-box;
`
export const GetImgs = styled.div`
  display: flex;
  gap: 10px;
  width: 1250px;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  left: 50%;
  transform: translate(-50%,0);
  bottom: 5%;
`
export const Title = styled.h1`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%,0);
  font-size: 40px;
`
export const SelectImgCount = styled.h1`
  position: absolute;
  top: 5%;
  left: 7%;
  font-size: 40px;
`
export const ChooseTime = styled.h1`
  position: absolute;
  top: 5%;
  left: 23%;
  font-size: 40px;
`