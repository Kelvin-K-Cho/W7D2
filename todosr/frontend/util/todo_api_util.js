import { receiveTodos } from '../actions/todo_actions';

export const getTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/todos'
  });
};

export const postTodos = (todo) => {
  return $.ajax({
    method: 'POST',
    url: 'api/todos',
    data: { 'todo': todo }
  });
};
