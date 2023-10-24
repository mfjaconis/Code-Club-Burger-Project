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

export const OrdesList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);

  width: 342px;
  height: 101px;
  flex-shrink: 0;

  p {
    display: flex;
    flex-direction: column;

    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  h3 {
    display: flex;
    flex-direction: column;

    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 30px;
  }

  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  padding: 0px 113px;
  margin-top: 60px;

  background: rgba(255, 255, 255, 0.14);

  color: #fff;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: bold;
  line-height: 2.5px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
`
