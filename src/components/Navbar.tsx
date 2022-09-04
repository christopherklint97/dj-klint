import { FC } from "react";
import styled from "styled-components";
import { Anchor, Text } from "@/components/Text";
import { useTranslation } from "next-i18next";
import { LanguageSelector } from "./LanguageSelector";
import Link from "next/link";

const Nav = styled.nav`
  display: flex;
  height: 60px;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  background: #1e2a36;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Column = styled.div`
  display: flex;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 2rem;
`;

export const Navbar: FC = () => {
  const { t } = useTranslation("common");
  return (
    <Nav>
      <Column>
        <Text>DJ Klint</Text>
      </Column>
      <Column>
        <List>
          <ListItem>
            <Link href="/#services" passHref>
              <Anchor>{t("Services")}</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/#prices" passHref>
              <Anchor>{t("Prices")}</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/#mixes" passHref>
              <Anchor>{t("Mixes")}</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/#faq" passHref>
              <Anchor>{t("FAQ")}</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/#contact" passHref>
              <Anchor>{t("Contact")}</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <LanguageSelector />
          </ListItem>
        </List>
      </Column>
    </Nav>
  );
};
