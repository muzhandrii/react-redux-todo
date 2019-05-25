import { createSelector } from 'reselect';

const allTodos = (state) => state.todos.todos;
const isLoading = (state) => state.todos.isLoading;

export const getTodos = createSelector(
  (state, path) => {
    const todos = allTodos(state);
    switch (path) {
      case '/new':
        return todos.filter((todo) => !todo.completed);
      case '/completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
  (todos) => todos,
);

export const getLoadingStatus = createSelector(
  isLoading,
  (state) => state,
);
