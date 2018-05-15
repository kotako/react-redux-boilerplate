// @flow

import React from 'react';

type Props = {
  addTodo: Function
};

const TodoTextForm = ({ addTodo }: Props) => {
  let input: ?HTMLInputElement;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (input == null || !input.value.trim()) return;
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default TodoTextForm;
