import { performAction } from "./action";
import { ToDoAction } from "./constants";

export function todoForm(action: ToDoAction, formId: string) {
  const todoForm = document.getElementById(formId);

  if (isFormElement(todoForm)) {
    // Display form that is hidden if JS is disabled
    todoForm.hidden = false;

    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const eventTarget = event.target;
      if (isFormElement(eventTarget)) {
        const formData = new FormData(eventTarget);

        performAction(action, formData);

        eventTarget.reset();
      }
    });
  }
}

function isFormElement(
  eventTarget: EventTarget | null,
): eventTarget is HTMLFormElement {
  return Boolean(eventTarget && eventTarget instanceof HTMLFormElement);
}
