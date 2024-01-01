import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
export const GetImgsLayout = styled.div`
  width: 650px;
  height: 600px;
  background-color: rgba(0,0,0,0.5);
  color: white;
  border-radius: 10px;
  position: relative;
`
export const GetImg = styled.img<{ selected: boolean }>`
  width: 200px;
  transform: scaleX(-1);
  border: ${(props) => (props.selected ? "3px solid black" : "3px solid transparent")};
  box-sizing: border-box;
`
export const GetImgs = styled.div`
  display: flex;
  gap: 10px;
  width: 625px;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  left: 50%;
  transform: translate(-50%,0);
  bottom: 5%;
`
export const Title = styled.h1`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%,0);
  font-size: 30px;
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
export const PreviewLayout = styled.div`
  width: 650px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FinalLayout = styled.div`
  height: 567px;
  width: 216px;
  background-color: black;
  display: flex;
  justify-content: center;
  position: relative;
`
export const FinalImgs = styled.div`
  position: absolute;
  bottom: 5%;
  width: 198px;
  height: 495px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const FinalImg = styled.img`
  transform: scaleX(-1);
`
export const NameLayout = styled.div`
  width: 100%;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Name = styled.h3`
  color: white;
`