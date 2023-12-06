import styled from "styled-components";

export const CamLayout = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%,50%) scaleX(-1);
  width: 700px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
`
export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StartButton = styled.button`

`
export const Second = styled.h1`
  position: absolute;
  right: 17%;
`
export const Count = styled.h1`
  position: absolute;
  right: 12%;
`
export const FlippedImage = styled.img`
  transform: scaleX(-1);
  position: absolute;
  left: 0;
  width: 300px;
`;