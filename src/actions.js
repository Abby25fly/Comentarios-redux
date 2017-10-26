import store from './store';

export const addTodo = text => {
   let oldList = store.getState().todos;
   const newList = oldList.concat({
      id: oldList.length,
      text: text,
   });
   store.setState({
      todos: newList
   });
};
