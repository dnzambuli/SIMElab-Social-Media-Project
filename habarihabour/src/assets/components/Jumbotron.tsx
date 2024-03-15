function CustomJumbo() {
  return (
    <>
      <div className="jumbo" id="#">
        <div className="jumbo-left">
          <h1>Welcome to Habari Habour</h1>
          <h3>Plot your Course to Popularity:</h3>
          <p>
            "Explore trends",{" "}
            <span className="jumbo-left-highlight">"Uncover New Waves"</span>,
          </p>
          <p>"Sail to Social Supremacy"</p>
          <button className="btn-lg custom-button">Sign Up</button>
          <button className="btn-lg custom-button">Log In</button>
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
              <button className="custom-button" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CustomJumbo;
