import * as actions from './todosActions';
import Api from '../../api/Api';

export function addTodo(todo) {
  return async function addTodoThunk(dispatch) {
    try {
      dispatch(actions.addTodo.start());

      const result = await Api.add(todo);

      dispatch(actions.addTodo.success(result));
    } catch (err) {
      dispatch(actions.addTodo.error());
    }
  };
}

export function loadAllTodo() {
  return async function loadAllTodoThunk(dispatch) {
    try {
      dispatch(actions.loadAllTodo.start());

      const result = await Api.getAll();

      dispatch(actions.loadAllTodo.success(result));
    } catch (err) {
      dispatch(actions.loadAllTodo.error());
    }
  };
}

export function removeTodo(id) {
  return async function removeTodoThunk(dispatch) {
    try {
      dispatch(actions.removeTodo.start());

      await Api.remove(id);

      dispatch(actions.removeTodo.success(id));
    } catch (err) {
      dispatch(actions.removeTodo.error());
    }
  };
}

export function completeTodo(id, body) {
  return async function removeTodoThunk(dispatch) {
    try {
      dispatch(actions.completeTodo.start(id));
      const result = await Api.update(id, body);
      dispatch(actions.completeTodo.success(result));
    } catch (err) {
      dispatch(actions.completeTodo.error());
    }
  };
}
