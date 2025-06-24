import { ITodo,ITodosAPIResponse } from "@/types/ITodo";

const ToDo_API_URL = 'https://dummyjson.com/todos';



export const fetchTodos = async (): Promise<ITodo[]> => {
  try {
    const response = await fetch(ToDo_API_URL);
    // console.log('response', response.json);

    if (!response.ok) {
      throw new Error(`HTTP error ! status: ${response.status}`)
    }
    const todoList: ITodosAPIResponse = await response.json();
    console.log('responnnnnnnnnnnnnnnns',todoList.todos);
    return todoList.todos;
  } catch (err: unknown) {

    console.error(err);
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(message);
  }
};
