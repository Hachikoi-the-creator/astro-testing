import type { Post } from "./Searchbar";

const SearchResults = ({ post }: { post: Post }) => {
  return (
    <div className="w-40 bg-violet-800 rounded-md">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SearchResults;
