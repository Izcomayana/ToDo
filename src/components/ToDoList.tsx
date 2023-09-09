import React, { useState, useEffect } from "react";
import Todo from "./ToDo";
import axios from "axios";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

type Day = {
  name: string;
  date: number;
};

const days: Day[] = [
  { name: "Mon", date: 1 },
  { name: "Tue", date: 2 },
  { name: "Wed", date: 3 },
  { name: "Thurs", date: 4 },
  { name: "Fri", date: 5 },
  { name: "Sat", date: 6 },
  { name: "Sun", date: 7 },
  { name: "Mon", date: 8 },
  { name: "Tue", date: 9 },
  { name: "Wed", date: 10 },
  { name: "Thurs", date: 11 },
];

const TODOS_PER_PAGE = 4;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
        setLoading(false);

        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []);

  const startIndex = (currentPage - 1) * TODOS_PER_PAGE;
  const endIndex = startIndex + TODOS_PER_PAGE;

  const displayedTodos = todos.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const addTodoFromOtherPage = (newTodo: TodoItem) => {
    setTodos([...todos, newTodo]);
  };

  const addTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo: TodoItem = {
        id: Date.now(),
        title: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    }
  };

  const deleteTodo = (id: number) => {
    // Send a delete request to your API to delete the todo
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`) // Replace with your API URL
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  const editTodo = (id: number, newText: string, completed: boolean) => {
    // Send a put/patch request to your API to update the todo
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: newText,
      }) // Replace with your API URL
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, title: newText, completed } : todo
          )
        );
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  return (
    <div>
      <div className="d-lg-flex justify-content-between">
        <div className="first-con pe-3">
          <h4 className="month fw-semibold">January 2023</h4>
          <ul className="days d-md-none d-flex justify-content-between p-0 mt-3">
            {days
              .filter((day) => day.date < 7)
              .map((day) => (
                <li
                  key={day.date}
                  className="d-flex bg-transparent flex-column align-items-center px-2 py-1 border rounded head h-100"
                >
                  <span>{day.name}</span>
                  <span>{day.date}</span>
                </li>
              ))}
          </ul>

          <ul className="days d-none d-md-flex justify-content-between p-0 mt-3">
            {days.map((day) => (
              <li
                key={day.date}
                className="d-flex bg-transparent flex-column align-items-center px-2 py-1 border rounded head h-100"
              >
                <span>{day.name}</span>
                <span>{day.date}</span>
              </li>
            ))}
          </ul>

          <h3 className="body fs-4 my-4">My Tasks</h3>
          {loading ? (
            <div
              className="spinner-border text-secondary m-5"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div>
              {displayedTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  text={todo.title}
                  completed={todo.completed}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              ))}
            </div>
          )}
        </div>

        <div className="d-flex justify-content-between">
          <button
            className="bg-transparent border-0 fs-6"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="bi bi-arrow-left"></i> Previous
          </button>
          <button
            className="bg-transparent border-0 fs-6"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= todos.length}
          >
            Next <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <div className="second-con d-none d-lg-block">
          {/* <CalendarComponent /> */}
          <div>
            <input
              type="text"
              placeholder="Add a new todo"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
