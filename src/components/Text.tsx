import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #e5e7eb;
`;

export const Anchor = styled(Text).attrs({ as: "a" })`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Heading1 = styled.h1`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.25rem;
  color: #e5e7eb;
`;

export const Heading2 = styled.h2`
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: #e5e7eb;
`;

export const Title = styled(Heading1)`
  text-align: center;
`;

export const Subtitle = styled(Heading2).attrs({ as: "p" })`
  margin-top: 1rem;
  text-align: center;
  max-width: 700px;
`;
