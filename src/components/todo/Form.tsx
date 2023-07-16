/** @jsxImportSource solid-js */

import type { Component } from "solid-js";
type FormE = Event & {
  submitter: HTMLElement;
} & {
  currentTarget: HTMLFormElement;
  target: Element;
};

const Form: Component = () => {
  // ----------------
  const submitHandler = (e: FormE) => {
    e.preventDefault();
    console.log("Poggers");
  };

  return (
    // @ts-ignore
    <form use:formSubmit={submitHandler}>
      <button>Click me if you dare</button>
    </form>
  );
};

export default Form;
