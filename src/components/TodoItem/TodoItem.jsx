import React from 'react';
import './todoItem.scss';
import T from 'prop-types';

export default function TodoItem({
  completed,
  text,
  id,
  removeTodo,
  completeTodo,
}) {
  return (
    <li className="todo-item">
      <button
        className={
          completed
            ? 'todo-item__btn todo-item__btn_completed'
            : 'todo-item__btn'
        }
        type="button"
        onClick={() => completeTodo(id, { completed: !completed })}
      />
      <p
        className={
          completed
            ? 'todo-item__text todo-item__text_completed'
            : 'todo-item__text'
        }
      >
        {text}
      </p>
      <button
        className="todo-item__close-btn"
        type="button"
        onClick={() => removeTodo(id)}
      >
        &#9747;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  id: T.string,
  completed: T.bool,
  text: T.string,
  removeTodo: T.func,
  completeTodo: T.func,
};

TodoItem.defaultProps = {
  id: '',
  completed: false,
  text: 'Some Todo',
  removeTodo: () => {},
  completeTodo: () => {},
};
