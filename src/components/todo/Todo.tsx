/** @jsxImportSource solid-js */

import { For } from "solid-js/web";
import { createLocalStore, removeIndex } from "./utils";
import { batch, createSignal } from "solid-js";

type TodoItem = { title: string; done: boolean };

const Todo = () => {
  const [newTitle, setTitle] = createSignal("");
  const [deleteConfirm, setDeleteConfirm] = createSignal(false);

  const [todos, setTodos] = createLocalStore<TodoItem[]>("todos", []);

  const addTodo = (e: SubmitEvent) => {
    e.preventDefault();
    batch(() => {
      setTodos(todos.length, {
        title: newTitle(),
        done: false,
      });
      setTitle("");
    });
  };

  return (
    <div class="text-blue-800">
      <h1 class="text-white text-2xl text-center font-sans m-5">
        Solid Todo App
      </h1>
      <form
        onSubmit={addTodo}
        class="flex flex-col max-w-lg gap-2 mx-auto mb-9"
      >
        <input
          class="border border-gray-300 px-2 py-1 rounded-md"
          placeholder="enter todo and click +"
          required
          value={newTitle()}
          onInput={(e) => setTitle(e.currentTarget.value)}
        />
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md">
          Create
        </button>
      </form>

      <For each={todos}>
        {(todo, i) => (
          <div class="gap-2 mb-2 w-full max-w-4xl mx-auto">
            <input
              autofocus
              type="text"
              value={todo.title}
              onChange={(e) => setTodos(i(), "title", e.currentTarget.value)}
              class={`border border-gray-300 px-2 py-1 text-blue-900 rounded-md w-full ${
                todo.done && "line-through text-blue-400"
              }`}
            />

            <div class="w-full flex justify-center gap-2 mt-1 mb-3">
              <button
                onClick={() => {
                  if (todos[i()].done) setTodos((t) => removeIndex(t, i()));
                  else
                    console.log("you will need to complete the todo first mf");
                }}
                class="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md w-1/4 text-black"
              >
                &#215;
              </button>

              <button
                onClick={() => {
                  setTodos(i(), "done", !todos[i()].done);
                }}
                class="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md w-1/4 text-black"
              >
                &#10003;
              </button>
            </div>
          </div>
        )}
      </For>

      {/* to avoid accidents, need to press this button and the other one that will appear after that! */}
      <aside class="fixed bottom-2 right-2">
        <button
          onclick={() => setDeleteConfirm(true)}
          class="p-2 bg-red-100 rounded-md text-red-700"
        >
          Delete All!
        </button>
      </aside>

      {deleteConfirm() && (
        <aside class="fixed bottom-2 right-2 bg-violet-800 z-10 text-white p-3 rounded-md">
          <p class="text-center font-bold">Are you sure???</p>

          <div class="flex justify-between">
            <button
              class="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md"
              onclick={() => {
                setDeleteConfirm(false);
              }}
            >
              &#215;
            </button>

            <button
              class="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md"
              onclick={() => {
                setTodos([]);
                setDeleteConfirm(false);
              }}
            >
              &#10003;
            </button>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Todo;
