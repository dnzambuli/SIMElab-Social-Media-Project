import { useState } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import axios from "axios";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  results: any[]; // Define a more specific type based on what your results look like
  setResults: (results: any[]) => void;
  performSearch: (term: string) => Promise<void>; // Same here for the specific type of your results
}

// Define the default context value with the correct types
const defaultContextValue: SearchContextType = {
  searchTerm: "",
  setSearchTerm: () => {},
  results: [],
  setResults: () => {},
  performSearch: async () => {},
};

const SearchContext = createContext<SearchContextType>(defaultContextValue);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>(defaultContextValue.results);
  const performSearch = async (term: string) => {
    try {
      const response = await axios.post("http://localhost:5174/search", {
        name: term,
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, results, setResults, performSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
