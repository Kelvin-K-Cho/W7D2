import TodoList from "./todo_list";
import { connect } from 'react-redux';
import {allTodos} from '../../reducers/selectors';
import { createTodo, fetchTodos, receiveTodo, clearErrors } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


/*
  connect connects the container to the store;
*/
