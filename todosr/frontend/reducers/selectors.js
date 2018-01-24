export const allTodos = (state) => {
  const ids = Object.keys(state.todos);
  return ids.map( (id) => {
    return state.todos[id];
  });
};

window.allTodos = allTodos;


/*
  in js, map excepts the new value at the index is the value of the return by the function when called on the element.
  as such the function we provide to map must always have a return statement.
  old: [1,2,3]
  old.map( (el) => {
    return el * 2;
  });
  Goes to index 0, grabs 1, returns 1 * 2 to a new array at the 0 index;
  cont...
  returns [2,4,6];
*/
