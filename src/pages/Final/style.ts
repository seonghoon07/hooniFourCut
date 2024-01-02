import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FinalLayout = styled.div`
  height: 630px;
  width: 240px;
  background-color: black;
  display: flex;
  justify-content: center;
  position: relative;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.40);
`
export const FinalImgs = styled.div`
  position: absolute;
  top: 1.5%;
  width: 220px;
  height: 550px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const FinalImg = styled.img`
  transform: scaleX(-1);
`