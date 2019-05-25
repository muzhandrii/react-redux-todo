import React from 'react';
import './TodoList.scss';
import T from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import { todosSelectors, todosOperations } from '../../modules/todos';

function TodoList({ list, removeTodo, completeTodo }) {
  const listItems = list.map((item) => (
    <TodoItem
      key={item.id}
      {...item}
      removeTodo={removeTodo}
      completeTodo={completeTodo}
    />
  ));
  return <ul className="todo-list">{listItems}</ul>;
}
TodoList.propTypes = {
  list: T.array,
  removeTodo: T.func,
  completeTodo: T.func,
};
TodoList.defaultProps = {
  list: [],
  removeTodo: () => {},
  completeTodo: () => {},
};

const mapStateToProps = (state, props) => ({
  list: todosSelectors.getTodos(state, props.match.path),
});

const mapDispatchToProps = {
  loadTodos: todosOperations.loadAllTodo,
  removeTodo: todosOperations.removeTodo,
  completeTodo: todosOperations.completeTodo,
};
const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadTodos();
    },
  }),
);

export default enhancer(TodoList);
