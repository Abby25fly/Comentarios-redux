import createStore from 'redux-zero';

const TODOS = [
  
];

const initialState = {
   todos: TODOS,
   selectedTodo: -1
};

const store = createStore(initialState);
export default store;
