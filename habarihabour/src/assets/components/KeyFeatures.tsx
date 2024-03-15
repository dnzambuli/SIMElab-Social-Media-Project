import { Image } from "react-bootstrap";
import keyImg1 from "../images/keycard1.png";
import keyImg2 from "../images/keycard2.png";
import keyImg3 from "../images/keycard3.png";

function Features() {
  return (
    <>
      <div className="row" id="KeyFeatures">
        <h2>Key Features</h2>
        <div className="card-deck">
          <div className="card col-2">
            <Image className="card-img-top" src={keyImg1} alt="content_perf" />
            <div className="card-body">
              <h5 className="card-title">Content Performance</h5>
              <p className="card-text">
                Tracking content reposts, comments, likes and the region it
                trended
              </p>
            </div>
            <div className="card-footer">
              <a href="">learn more</a>
            </div>
          </div>
          <div className="card col-2">
            <Image
              className="card-img-top"
              src={keyImg2}
              alt="audience_behaviour"
            />
            <div className="card-body">
              <h5 className="card-title">Audience Behaviour</h5>
              <p className="card-text">
                Post recommendation based on preference and reactions to similar
                content
              </p>
            </div>
            <div className="card-footer">
              <a href="">learn more</a>
            </div>
          </div>
          <div className="card col-2">
            <Image className="card-img-top" src={keyImg3} alt="content_reach" />
            <div className="card-body">
              <h5 className="card-title">Reach of Content</h5>
              <p className="card-text">
                The demographics and number of individuals that interacted with
                the posts
              </p>
            </div>
            <div className="card-footer">
              <a href="">learn more</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
