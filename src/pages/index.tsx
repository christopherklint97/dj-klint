import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import turntable from "@/public/images/turntable.jpg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Title = styled.h1`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.25rem;
  color: #e5e7eb;
`;

const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #e5e7eb;
`;

const Page = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: absolute;
  z-index: 1;
`;

const Home: NextPage = () => {
  return (
    <Page>
      <Section>
        <Image src={turntable} alt="" placeholder="blur" />
        <Content>
          <Title>DJ Klint</Title>
          <Subtitle></Subtitle>
        </Content>
      </Section>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", ["home"])),
    },
  };
};

export default Home;
