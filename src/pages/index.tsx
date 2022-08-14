import { NextPage } from "next";
import styled from "styled-components";

const Title = styled.h1`
  color: pink;
`;

const Home: NextPage = () => {
  return <Title>This is the homepage.</Title>;
};

export default Home;
