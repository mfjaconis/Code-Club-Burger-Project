import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
  Container,
  ContainerItens,
  Image,
  OrdesList,
  Button,
  ContainerList,
} from "./styles";

import BurguerOrdes from "../../assets/burger-order.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title";

const Ordes = () => {
  const navegate = useNavigate();
  const [orders, setOrdes] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrdes } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrdes(newOrdes);
    }

    fetchOrders();
  }, []);

  async function deleteUser(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);

    const newOrdes = orders.filter((order) => order.id !== orderId);

    setOrdes(newOrdes);
  }

  function goBackPage() {
    navegate("/");
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt="logo code club burguer" src={BurguerOrdes} />
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <OrdesList key={order.id}>
              <ContainerList>
                <p>{order.orde}</p>

                <h3>{order.clientName}</h3>
              </ContainerList>
              <button onClick={() => deleteUser(order.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </OrdesList>
          ))}
        </ul>
      </ContainerItens>
      <Button onClick={goBackPage}>Voltar</Button>
    </Container>
  );
};

export default Ordes;
