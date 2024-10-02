# React Theory Questions and Answers

### 1. What is React? 
### React mainly used to make complex froentends
# react is library, if we need to build web apps then we need react + react-dom
# if we are using react for mobile apps then we need react + react-native
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the view layer in web applications efficiently. React uses a virtual DOM for performance and allows for declarative programming.

### 2. What are the key features of React?
- **Components**: Reusable, self-contained pieces of UI.
- **JSX**: A syntax extension that allows mixing HTML with JavaScript.
- **Virtual DOM**: A lightweight copy of the real DOM that React uses to optimize rendering.
- **One-Way Data Binding**: Data flows in a single direction, making the application more predictable.
- **Declarative UI**: Developers describe what the UI should look like based on the current state.

### 3. What is JSX?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML but allows you to write elements directly in JavaScript. JSX makes it easier to write and visualize the structure of the UI.

### 4. What is the virtual DOM?
The virtual DOM is a concept where React keeps a lightweight, in-memory representation of the real DOM. React uses this virtual DOM to efficiently update the UI by calculating the differences (diffing) and applying only the necessary changes to the real DOM.

### 5. What are React components?
React components are the building blocks of any React application. They are reusable pieces of UI that can manage their own state and props. Components can be class-based or functional.

### 6. What are props in React?
Props (short for "properties") are inputs to a React component. They are passed from parent to child components and are read-only. Props allow components to be dynamic and customizable.

### 7. What is state in React?
State is a special object in React components that holds data that may change over time. Unlike props, state is managed within the component and can be updated with `setState` (in class components) or `useState` (in functional components).

### 8. What is the difference between state and props?
- **Props**: Data passed to the component from outside and is immutable (read-only).
- **State**: Data managed inside the component and can be changed within the component.

### 9. What are hooks in React?
Hooks are special functions that allow you to "hook into" React features in functional components. Hooks like `useState`, `useEffect`, and others enable state and lifecycle features in functional components.

### 10. What is the useState hook?
`useState` is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

```javascript
const [count, setCount] = useState(0);
