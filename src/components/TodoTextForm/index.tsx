import React from "react";

interface Props {
  addTodo: (text: string) => void;
}

const TodoTextForm = ({ addTodo }: Props) => {
  let input: any;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (input == null || !input.value.trim()) return;
          addTodo(input.value);
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default TodoTextForm;
