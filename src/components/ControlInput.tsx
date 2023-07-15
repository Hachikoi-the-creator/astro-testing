import { createSignal, type Component } from "solid-js";

const ControlInput: Component = () => {
  const [search, setSearch] = createSignal("");

  return (
    <form>
      <input
        type="number"
        value={search()}
        onInput={(e) => setSearch(e.currentTarget.value)}
      />
    </form>
  );
};

export default ControlInput;
