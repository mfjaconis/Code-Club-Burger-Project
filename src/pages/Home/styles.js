import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: black;

  gap: 20px;
`;

export const Image = styled.img`
  margin-top: 10px;
  width: 342px;
  height: 354px;
  flex-shrink: 0;

  margin-bottom: 25px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.p`
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;

  margin-top: 64px;
`;

export const Input = styled.input`
  display: flex;
  padding: 19px 139px 18px 15px;
  align-items: center;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);

  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  padding: 0px 113px;
  margin-top: 60px;

  background: #d93856;

  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px; /* 14.706% */

  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;




