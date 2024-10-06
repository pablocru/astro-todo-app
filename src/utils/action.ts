import { ToDo, type IToDo } from "./entity.ts";
import { ToDoAction, TODO_LOCAL_STORAGE_KEY } from "./constants.ts";

export function performAction(action: ToDoAction, formData: FormData) {
  switch (action) {
    case ToDoAction.Create:
      createToDo(formData);
      break;
    default:
      break;
  }
}

function createToDo(formData: FormData) {
  const toDo = new ToDo(formData);

  saveInLocalStorage(toDo);
}

function saveInLocalStorage(toDo: IToDo) {
  const storedToDoList = localStorage.getItem(TODO_LOCAL_STORAGE_KEY);

  const todoList = storedToDoList ? JSON.parse(storedToDoList) : [];

  todoList.push(toDo);

  localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(todoList));
}
