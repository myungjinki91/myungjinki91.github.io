import { styled } from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 10px;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 5px;
`;

const Home = () => {
  return (
    <>
      <Header>myungjinki91.github.io</Header>
      <Container>
        <Project>
          <a href="https://myungjinki91.github.io/crypto-tracker-1/">
            1. Nomadcoder React Masterclass: Coin Tracker
          </a>
          <a href="https://myungjinki91.github.io/calculator-1/">
            2. Calculator
          </a>
          <a href="https://myungjinki91.github.io/chrome-welcome-page">
            3. Chrome welcome page
          </a>
        </Project>
      </Container>
    </>
  );
};

export default Home;
