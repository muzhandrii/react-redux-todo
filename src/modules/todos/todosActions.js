import { createAsyncActions } from '@letapp/redux-actions';

export const addTodo = createAsyncActions('todos/ADD_TODO');
export const loadAllTodo = createAsyncActions('todos/GET_ALL_TODO');
export const removeTodo = createAsyncActions('todos/REMOVE_TODO');
export const completeTodo = createAsyncActions('todos/COMPLETE_TODO');
