import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import turntable from "../../public/images/turntable.jpg";

const Title = styled.h1`
  color: white;
`;

const Page = styled.section`
  padding: 1rem;
`;

const Home: NextPage = () => {
  return (
    <Page>
      <Title>This is the homepage.</Title>
      <Image src={turntable} alt="" placeholder="blur" />
    </Page>
  );
};

export default Home;
