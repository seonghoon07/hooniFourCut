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
  background-color: aliceblue;
  position: relative;
`
export const GetImg = styled.img`
  width: 300px;
  transform: scaleX(-1);
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
`