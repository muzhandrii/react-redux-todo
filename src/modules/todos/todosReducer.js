import { handleActions } from '@letapp/redux-actions';
import * as actions from './todosActions';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export default handleActions(
  {
    [actions.addTodo.start]: (state) => ({
      ...state,
      isLoading: true,
      isError: false,
    }),
    [actions.addTodo.success]: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
      isLoading: false,
    }),
    [actions.addTodo.error]: (state) => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    [actions.loadAllTodo.start]: (state) => ({
      ...state,
      isError: false,
    }),
    [actions.loadAllTodo.success]: (state, action) => ({
      ...state,
      todos: action.payload,
    }),
    [actions.loadAllTodo.error]: (state) => ({
      ...state,
      isError: true,
    }),
    [actions.removeTodo.start]: (state) => ({
      ...state,
      isError: false,
    }),
    [actions.removeTodo.success]: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
    [actions.removeTodo.error]: (state) => ({
      ...state,
      isError: true,
    }),
    [actions.completeTodo.start]: (state, action) => ({
      ...state,
      isError: false,
      todos: state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }),
    [actions.completeTodo.success]: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
        return todo;
      }),
    }),
    [actions.completeTodo.error]: (state) => ({
      ...state,
      isError: true,
    }),
  },
  initialState,
);
