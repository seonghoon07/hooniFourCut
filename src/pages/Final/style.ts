import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;
export const FinalLayout = styled.div<{ backgroundColor: string }>`
  height: 630px;
  width: 240px;
  background-color: black;
  display: flex;
  justify-content: center;
  position: relative;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.backgroundColor};
`;
export const FinalImgs = styled.div`
  position: absolute;
  top: 1.5%;
  width: 220px;
  height: 550px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FinalImg = styled.img`
  transform: scaleX(-1);
`;
export const Install = styled.button`
  border: none;
  background-color: black;
  color: white;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  font-size: 30px;
  cursor: pointer;
`;
