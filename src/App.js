import React from "react";

// useState
import Counter from "./components/Exercise12_useState/Counter";
import ControlledInput from "./components/Exercise12_useState/ControlledInput";
import ToggleVisibility from "./components/Exercise12_useState/ToggleVisibility";
import TodoList from "./components/Exercise12_useState/TodoList";
import ColorSwitcher from "./components/Exercise12_useState/ColorSwitcher";
import SearchFilter from "./components/Exercise12_useState/SearchFilter";
import DragDropList from "./components/Exercise12_useState/DragDropList";

// useEffect
import UserPosts from "./components/Exercise13_useEffect/UserPosts";
import CountdownTimer from "./components/Exercise13_useEffect/CountdownTimer";
import WindowSize from "./components/Exercise13_useEffect/WindowSize";
import ValidatedInput from "./components/Exercise13_useEffect/ValidatedInput";

// useContext
import Theme from "./components/Exercise14_useContext/Theme";
import { ThemeProvider } from "./components/Exercise14_useContext/ThemeContext";
import DishesList from "./components/Exercise14_useContext/DishesList";
import Cart from "./components/Exercise14_useContext/Cart";
import { CartProvider } from "./components/Exercise14_useContext/CartContext";

// useReducer
import CounterReducer from "./components/Exercise15_useReducer/CounterReducer";
import QuestionBank from "./components/Exercise15_useReducer/QuestionBank";

function App() {
  return (
    <div>
      <h1>React Hooks Exercises 12 - 15</h1>

      <h2>Exercise 12 - useState</h2>
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />

      <h2>Exercise 13 - useEffect</h2>
      <UserPosts userId={1} />
      <CountdownTimer initialValue={10} />
      <WindowSize />

      <ValidatedInput
        validationFunction={(value) => value.length >= 5}
        errorMessage="Input must have at least 5 characters."
      />

      <h2>Exercise 14 - useContext</h2>

      <ThemeProvider>
        <Theme />
      </ThemeProvider>

      <CartProvider>
        <DishesList />
        <Cart />
      </CartProvider>

      <h2>Exercise 15 - useReducer</h2>
      <CounterReducer />
      <QuestionBank />
    </div>
  );
}

export default App;
