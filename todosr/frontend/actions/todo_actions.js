import { getTodos, postTodos } from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = "RECEIVE_TODO";

export const fetchTodos = () => {
  return (dispatch) => {
    let promise = getTodos();
    promise.then((todos) => {
      dispatch(receiveTodos(todos));
    });
    return promise;
  };
};

export const createTodo = (todo) => {
  return (dispatch) => {
    let promise = postTodos(todo);
    promise.then((todo) => {
      dispatch(receiveTodo(todo));
    },
    (err) => dispatch(receiveErrors(err.responseJSON)));
    return promise;
  };
};


export const receiveTodos = (todos = []) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

/*
  actioncreator creates an action
  an action is a javascript object
  the object has keys
  the most important one is type
  that will tell the reducer what to do with the action
  every other key depends on what the reducer will do/expects

  accepts one argument call todos as an array of todo items
  resets the store's list of todos with the argument
  it does so by passing an action
  the type of action is receivetodos
  the data is the argument
*/
