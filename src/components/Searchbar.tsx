import axios, { type CancelTokenSource } from "axios";
import SearchResults from "./SearchResults";
import { useState, type ChangeEvent } from "react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const baseUrl = "https://jsonplaceholder.typicode.com";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Post[]>();
  let cancelTokenSource: CancelTokenSource | null = null;

  const inputHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);

    // Cancel the previous request if it exists
    if (cancelTokenSource) {
      cancelTokenSource.cancel("Request canceled");
    }

    // Create a new cancel token source
    cancelTokenSource = axios.CancelToken.source();

    try {
      const validId = (+value % 100) + 1;
      const { data } = await axios.get<Post>(`${baseUrl}/posts/${validId}`, {
        // Assign the cancel token to the request
        cancelToken: cancelTokenSource.token,
      });

      // Process the response or update the state here
      setResults([data, data, data, data]);
      console.log(data);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Handle canceled request error
        console.log("Request canceled:", error.message);
      } else {
        // Handle other errors
        console.log("Error:", (error as Error).message);
      }
    }
  };

  return (
    <>
      <form>
        <input
          type="number"
          value={search}
          onChange={inputHandler}
          className="bg-blue-700"
        />
      </form>

      {results?.map((item, i) => (
        <SearchResults key={i} post={item} />
      ))}
    </>
  );
};

export default Searchbar;
