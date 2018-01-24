import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './actions/todo_actions';

const store = configureStore();
window.store = store;


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root store={store} />,document.getElementById('content'));
});

window.fetchTodos = fetchTodos;
