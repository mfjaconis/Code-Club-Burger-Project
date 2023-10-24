import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"


import axios from "axios";

import {
  Container,
  ContainerItens,
  Image,
  InputLabel,
  Input,
  Button,
} from "./styles";

import BurguerHome from "../../assets/burger-home.svg";

import H1 from "../../components/Title";

function Home() {
  const [orders, setOrdes] = useState([]);
  const inputOrders = useRef();
  const inputClientName = useRef();
  const navegate = useNavigate()

 async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      orde: inputOrders.current.value,
      clientName: inputClientName.current.value,
    });

    setOrdes([...orders, newOrder]);

    navegate("/pedidos  ")
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt="logo code club burguer" src={BurguerHome} />
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrders} placeholder="digite seu pedido" />
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder="digite seu nome" />
      </ContainerItens>
      <Button onClick={addNewOrder}>Novo Pedido</Button>
    </Container>
  );
}

export default Home;
