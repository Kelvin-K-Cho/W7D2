import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
import {ErrorListItem} from './error_list_item';

// module.exports = () => <h3>Todo List goes here!</h3>;

const TodoList = (props) => {
  //at this point, props === state
  // console.log(props.todos);
  if (props.todos.length < 1) {
    props.fetchTodos();
  }
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoListItem receiveTodo={props.receiveTodo} key={todo.id} todo={todo}/>
        ))}
      </ul>
      <TodoForm clearErrors={props.clearErrors} errors={props.errors} createTodo={props.createTodo}/>
    </div>
  );
};

export default TodoList;
