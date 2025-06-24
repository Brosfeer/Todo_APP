export interface ITodo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

export type ITodosAPIResponse = {
  todos: ITodo[],
  total: number,
  skip: number,
  limit: number
}