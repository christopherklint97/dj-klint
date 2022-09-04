import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import turntable from "@/public/images/turntable.jpg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Subtitle, Title } from "@/components/Text";

const Page = styled.main`
  max-width: 1280px;
  margin: 0 auto;
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

const HeroImage = styled(Image)`
  opacity: 0.5;
`;

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <Page>
      <Section>
        <HeroImage
          src={turntable}
          alt=""
          placeholder="blur"
          height="700"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <Content>
          <Title>DJ Klint</Title>
          <Subtitle>{t("Your favorite DJ")}</Subtitle>
        </Content>
      </Section>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", ["home", "common"])),
    },
  };
};

export default Home;
