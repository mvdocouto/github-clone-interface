import React from "react";
import { Link } from "react-router-dom"
import {
  Container,
  Brandcrump,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Brandcrump>
        <RepoIcon />
        <Link className={"username"} to={"/mvdocouto"}>
          mvdocouto
        </Link>
        <span>/</span>
        <Link className={"reponame"} to={"/mvdocouto/youtube-content"}>
          youtube-content
        </Link>
      </Brandcrump>

      <p>Contains all code.</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"http://github.com/mvdocouto"}>
        <GithubIcon />
        <span>view on github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
