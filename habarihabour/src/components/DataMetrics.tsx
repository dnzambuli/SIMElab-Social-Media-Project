import { useContext, useEffect } from "react";
import axios from "axios";
import SearchContext from "./SearchContext"; // adjust the path according to your file structure

function Data() {
  const { searchTerm, results, setResults } = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const response = await axios.post("http://localhost:5173/", {
            name: searchTerm,
          });
          setResults(response.data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    };

    fetchData();
  }, [searchTerm, setResults]);

  return (
    <div>
      {results.map((result, index) => (
        <div key={index} className="card data" id="data">
          <div className="card-body">
            <h5 className="card-title">{result.title}</h5>
            <p className="card-text">{result.description}</p>
            <a href={result.link} className="btn btn-primary">
              Go to article
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data;
