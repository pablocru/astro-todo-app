import { ToDoFormField } from "./constants";

export interface IToDo {
  title: string;
  isCompleted: boolean;
  dueDate: Date;
}

export class ToDoCreationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class ToDo implements IToDo {
  title: string;
  isCompleted: boolean = false;
  dueDate: Date;

  constructor(formData: FormData) {
    const titleEntry = formData.get(ToDoFormField.Title);

    if (!titleEntry) throw new ToDoCreationError("Title must be provided");
    this.title = titleEntry.toString();

    const dueDateEntry = formData.get(ToDoFormField.DueDate);
    if (!dueDateEntry) throw new ToDoCreationError("Due date must be provided");
    this.dueDate = new Date(dueDateEntry.toString());
  }
}
