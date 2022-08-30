import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import turntable from "@/public/images/turntable.jpg";

const Title = styled.h1`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.25rem;
  color: #e5e7eb;
`;

const Page = styled.section`
  max-width: 1280px;
  margin: 0 auto;
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
