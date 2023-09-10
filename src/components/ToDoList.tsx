import React, { useState, useEffect } from "react";
import Todo from "./ToDo";
import axios from "axios";
import AddTodo from "./AddTodo";
import EditToDo from './EditToDo'
import notification from "../assets/images/bell.png";
import TodoView from "./ToDoView";

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

const TODOS_PER_PAGE = 15;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
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

  const addTodo = (newText: string) => {
    if (newText.trim() !== "") {
      const newTodo: TodoItem = {
        id: Date.now(),
        title: newText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    }
  };

  const deleteTodo = (id: number) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  const editTodo = (id: number, newText: string, completed: boolean) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: newText,
      })
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
        <div className="first-con pe-3 mb-3">
          <div className="border-bottom">
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
              ></div>
            ) : (
              <div className="todos">
                {displayedTodos.map((todo) => (
                  <span data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      text={todo.title}
                      completed={todo.completed}
                      onDelete={deleteTodo}
                      onEdit={editTodo}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="d-flex justify-content-between my-3">
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

          <div className="my-3 mb-5 d-lg-none">
            <input
              type="text"
              className="border w-100 rounded p-2"
              placeholder="Creat New Task"
              data-bs-toggle="modal"
              data-bs-target="#addBackdrop"
              value={''}
            />
          </div>
        </div>

        <div>
          <div
            className="modal fade"
            id="addBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <AddTodo onAdd={addTodo} />
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <TodoView />
            </div>
          </div>
        </div>
        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <EditToDo />
            </div>
          </div>
        </div>

        <div className="second-con d-none d-lg-block">
          {/* <CalendarComponent /> */}

          <div className="addTask shadow p-3 mb-5 bg-body-tertiary rounded">
            <AddTodo onAdd={addTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
