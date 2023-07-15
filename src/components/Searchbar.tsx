import { createSignal, type Component } from "solid-js";
import axios, { type CancelTokenSource } from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const baseUrl = "https://jsonplaceholder.typicode.com";

type InputE = InputEvent & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

const Searchbar: Component = () => {
  const [search, setSearch] = createSignal("");
  const [results, setResults] = createSignal<Post>();
  let cancelTokenSource: CancelTokenSource | null = null;

  const inputHandler = async (e: InputE) => {
    const value = e.currentTarget.value;
    const validId = +value / 100;
    setSearch(value);

    // Cancel the previous request if it exists
    if (cancelTokenSource) {
      cancelTokenSource.cancel("Request canceled");
    }

    // Create a new cancel token source
    cancelTokenSource = axios.CancelToken.source();

    try {
      const { data } = await axios.get(`${baseUrl}/posts/${value}`, {
        // Assign the cancel token to the request
        cancelToken: cancelTokenSource.token,
      });

      // Process the response or update the state here
      setResults(data);
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
    <form>
      <input type="number" value={search()} onInput={inputHandler} />
    </form>
  );
};

export default Searchbar;
