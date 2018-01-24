import React from 'react';
import TodoListContainer from './todos/todo_list_container';
import TodoForm from './todos/todo_form';

const App = (props) => {
  return (
    <div>
      <h1>Todos App</h1>
      <TodoListContainer />
    </div>
  );
};

export default App;
