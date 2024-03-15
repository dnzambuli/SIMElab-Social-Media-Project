import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/banner.png";
import { BiCaretRightCircle } from "react-icons/bi";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Explore Trends",
    "Uncover New Waves",
    "Sail to Social Supremacy",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000; // time between transitions

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]; // full current element
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1); // next vs current text
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    // check the deleting and updating cycles
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to Habari Harbour</span>
            <h1>
              Plot Your Course to Popularity:{" "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit consequuntur adipisci mollitia odio possimus dicta
              harum, error necessitatibus deserunt ullam obcaecati nihil, labore
              facere suscipit! Quidem delectus eum aut sint?
            </p>
            <button onClick={() => console.log("Your Trends")}>
              Your Trends <BiCaretRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img by Brett Jordan" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
