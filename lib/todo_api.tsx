const ToDo_API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = async () => {
  try {
    const response = await fetch(ToDo_API_URL);
    const toDoList = await response.json();
    console.log(toDoList.todos);
    return toDoList.todos;
    console.log(toDoList);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
