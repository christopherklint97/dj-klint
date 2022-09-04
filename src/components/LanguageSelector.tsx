import Link from "next/link";
import { FC } from "react";
import { Anchor, Text } from "@/components/Text";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const LanguageSelector: FC = () => {
  const { pathname, query } = useRouter();
  return (
    <Container>
      <Link href={{ pathname, query }} locale="en" passHref>
        <Anchor>EN</Anchor>
      </Link>
      <Text>|</Text>
      <Link href={{ pathname, query }} locale="sv" passHref>
        <Anchor>SV</Anchor>
      </Link>
    </Container>
  );
};
