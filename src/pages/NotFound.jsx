import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 50px 250px 100px 250px;
    padding: 50px;
    background-color: #bfe9f0;

    h1 {
      font-size: x-large;
      font-weight: bold;
      margin-bottom: 20px;
    }

    p {
      width: 75%;
      margin-bottom: 30px;
    }

    span {
      text-decoration: underline;
      font-weight: bold;
    }
  `;

  return (
    <Container>
      <h1>PÁGINA NÃO ENCONTRADA!</h1>
      <p>
        Desculpe, parece que a página que você está procurando já não existe
        mais. Por favor, continue navegando ou confira nossas sugestões abaixo.
      </p>
      <Link to="/">
        <span>Quero ir para a Página Inicial</span>
      </Link>
    </Container>
  );
}

export default NotFound;
