import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoInput from "./Components/TodoInput";
import TodoItem from "./Components/TodoItem";
import Header from "./Components/Header/Header";

function App() {
  const routes = [
    {
      id: 1,
      path: "/todoinput",
      element: <TodoInput />,
    },
    {
      id: 2,
      path: "/todoitem",
      element: <TodoItem />,
    },
  ];

  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
