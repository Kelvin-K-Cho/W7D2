import React from 'react';
import {receiveTodo} from '../../actions/todo_actions';
import {ErrorList} from './error_list';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleBodyValue = this.handleBodyValue.bind(this);
    this.handleTitleValue = this.handleTitleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleTitleValue(e){
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }

  handleBodyValue(e){
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    function uniqueId() {
      return new Date().getTime();
    }
    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false,
    };
    this.props.createTodo(todo);
  }

  render() {
    return (
      <form>
        <h1>Add New Todo</h1>
        <ErrorList errors={this.props.errors}/>
        <br/>
        {this.props.errors.length > 0 &&
        <button onClick={this.props.clearErrors}> Clear Errors</button>
        }
        <br/>
        <label>
          Title
          <br/>
          <input onChange={this.handleTitleValue} value={this.state.title}></input>
        </label>
        <br/>
        <label>
          Body
          <br/>
          <textarea onChange={this.handleBodyValue} value={this.state.body}></textarea>
        </label>
        <br/>

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
