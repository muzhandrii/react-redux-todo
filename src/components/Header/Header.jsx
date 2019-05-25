import React from 'react';
import './header.scss';
import T from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { todosOperations, todosSelectors } from '../../modules/todos';

function Header({
  handleAddTodo,
  handleInputChange,
  value,
  isLoading,
}) {
  return (
    <header className="header">
      <h1 className="header__title">To do App</h1>
      <form className="header__form" onSubmit={handleAddTodo}>
        <input
          className="header__input"
          onChange={(event) => handleInputChange(event.target.value)}
          placeholder="Add todo"
          type="text"
          value={value}
        />
        <button className="header__btn" type="submit">
          {isLoading ? 'Adding...' : '+ Add'}
        </button>
      </form>
    </header>
  );
}

Header.propTypes = {
  handleAddTodo: T.func,
  handleInputChange: T.func,
  value: T.string,
  isLoading: T.bool,
};

Header.defaultProps = {
  handleAddTodo: () => {},
  handleInputChange: () => {},
  value: '',
  isLoading: false,
};

const mapDispatchToProps = {
  addTodo: todosOperations.addTodo,
};
const mapStateToProps = (state) => ({
  isLoading: todosSelectors.getLoadingStatus(state),
});

const enhancer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('value', 'handleInputChange', ''),
  withHandlers({
    handleAddTodo: (props) => (event) => {
      event.preventDefault();
      if (props.value.search(/[a-zA-Zа-яА-Я]/) !== -1) {
        let todoText = props.value.trim();
        if (todoText.search(/[a-zA-Zа-яА-Я]/) === 0) {
          todoText = todoText[0].toUpperCase() + todoText.slice(1);
        }
        const todo = {
          id: uuid(),
          text: todoText,
          completed: false,
        };
        props.addTodo(todo);
        props.handleInputChange('');
      }
    },
  }),
);

export default enhancer(Header);
