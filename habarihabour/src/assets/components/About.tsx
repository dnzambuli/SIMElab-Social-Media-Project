import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Container id="#about">
        <h1>About Habari Habour</h1>
        <p>
          Habari habour is a <span>research project</span> that aims to provide
          social media listening and a recommender system customized for{" "}
          <span>upcoming social media content creators</span>
        </p>
      </Container>
    </>
  );
}

export default About;
