# Todo List App

A simple React-based Todo List application that allows users to add, toggle, and remove tasks. The tasks are stored in the browser's `localStorage`, so they persist even when the page is refreshed.

## Features

- **Add a new todo**: Users can enter a title for a new task and it will be added to the list.
- **Toggle completion**: Users can check/uncheck a todo item to mark it as completed or not.
- **Remove todos**: Users can remove tasks from the list.
- **Persistence**: Todos are saved to `localStorage` so they persist across page reloads.

## Tech Stack

- **React**: The app is built with React (v17 or later).
- **CSS**: Basic styling with custom CSS for the layout.
- **localStorage**: Used to store the todos so that they persist between page reloads.


## How it Works

1. **App Component**:
   - The `App` component manages the state of the todos.
   - It uses the `useState` hook to initialize the `todos` state from `localStorage` if available.
   - It also uses the `useEffect` hook to save the updated todos back into `localStorage` whenever they change.

2. **TodoList Component**:
   - The `TodoList` component receives `todos`, `toggleTodo`, and `removeTodo` as props.
   - It renders the list of todos or displays a message when no todos are present.

3. **TodoItem Component**:
   - The `TodoItem` component is responsible for rendering each todo's title, completion checkbox, and remove button.
   - It receives props like `completed`, `id`, `title`, and functions like `toggleTodo` and `removeTodo`.

4. **NewTodo Component**:
   - The `NewTodo` component is responsible for rendering a form where users can input the title of a new todo item.
   - It accepts an `onSubmit` prop that is triggered when the form is submitted. It passes the new todo title to this function.
   - The input field for the new todo title is controlled using React's `useState` hook, and once the todo is added, the input is cleared.



**Enjoy using your Todo List App!** ✨
