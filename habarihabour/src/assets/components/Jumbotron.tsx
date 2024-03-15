import { Button, Container } from "react-bootstrap";

function CustomJumbo() {
  return (
    <>
      <Container className="jumbo" id="#">
        <div>
          <h1>Welcome to Habari Habour</h1>
          <h3>Plot your Course to Popularity:</h3>
          <p>
            Explore trends, <span>Uncover New Waves</span>, Sail to Social
            Supremacy
          </p>
          <Button className="btn btn-lg custom-button">Sign Up</Button>
          <Button className="btn btn-lg custom-button">Log In</Button>
        </div>
        <div className="jumbo-search">
          <form>
            <div className="mb-3 mt-3">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Find a Topic of your choice"
                aria-label="Search"
              />
              <Button
                className="btn jumbo-btn custom-button my-2 my-sm-0"
                type="submit"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default CustomJumbo;
