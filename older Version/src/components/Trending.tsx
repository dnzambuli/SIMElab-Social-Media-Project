import { Col, Container, Row, Carousel } from "react-bootstrap";
import meter1 from "../assets/images/carousel-1.jpg";
import meter2 from "../assets/images/carousel-2.png";
import meter3 from "../assets/images/carousel-3.png";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

function Trending() {
  return (
    <>
      <Container className="trending" id="trending">
        <div className="trending-head">
          <h2>Trending News</h2>
          <p>
            "Stay ahead of the social media game with today's trending news,
            shaping your online presence one headline at a time."
          </p>
        </div>
        <Carousel
          indicators={false}
          prevIcon={
            <BsFillCaretLeftFill
              style={{ color: "#f7931d", fontSize: "40px" }}
            />
          }
          nextIcon={
            <BsFillCaretRightFill
              style={{ color: "#f7931d", fontSize: "40px" }}
            />
          }
          className="trending-item"
        >
          <Carousel.Item>
            <div className="container text-start">
              <Row className="row align-items-center">
                <Col className="col-4 col-md-4">
                  <img
                    src={meter1}
                    alt="trees"
                    className="img-rounded img-fluid"
                  />
                </Col>
                <Col className="col-6 col-mg-6">
                  <h5>This is a Title</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <button type="button" className="btn btn-outline-warning">
                    Read More
                  </button>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container text-start">
              <Row className="row align-items-center">
                <Col className="col-4 col-md-4">
                  <img
                    src={meter2}
                    alt="trees"
                    className="img-rounded img-fluid"
                  />
                </Col>
                <Col className="col-6 col-mg-6">
                  <h5>This is a Title</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <button type="button" className="btn btn-outline-warning">
                    Read More
                  </button>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container text-start">
              <Row className="row align-items-center">
                <Col className="col-4 col-md-4">
                  <img
                    src={meter3}
                    alt="trees"
                    className="img-rounded img-fluid"
                  />
                </Col>
                <Col className="col-6 col-mg-6">
                  <h5>This is a Title</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <button type="button" className="btn btn-outline-warning">
                    Read More
                  </button>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default Trending;
