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
        <Project>1. Nomadcoder React Masterclass: Coin Tracker</Project>
      </Container>
    </>
  );
};

export default Home;
