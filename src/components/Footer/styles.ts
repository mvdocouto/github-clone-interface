import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 32px;
`;

export const Line = styled.div`
  width: 100%;
  max-width: 1280px;
  border-top: 1px solid var(--border);
`;

export const GithubLogo = styled(FaGithub)`
  margin-top: 25px;
  width: 32px;
  height: 32px;
  fill: var(--border);
  flex-shrink: 0;
`;
