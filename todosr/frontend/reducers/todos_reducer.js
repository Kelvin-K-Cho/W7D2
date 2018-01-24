import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

// const initialState = {
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// };

//this is what the initial state of the todos slice looks like

const todosReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {

    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach((el) => {
        newState[el.id] = el;
      });
      return newState;

    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;

    default:
      return state;
  }
};

/*
  reducer is a pure function
  it takes state and action
  use initial state if no argument is passed
  if applicable, will return a new state
  if not applicable, will return old state


  way to think about it:
  not this = current state = old state + action
  this = current state = new state
   //can do newstate.key = oldstate.key + val
   //because if the function is passed the same arguments,
   old state will still be the same


*/

export default todosReducer;
