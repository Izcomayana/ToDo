import React, { useState, useEffect } from "react";
import Todo from "./ToDo";
import axios from "axios";
import AddTodo from "./AddTodo";
import EditTodo from "./EditToDo";
import TodoView from "./ToDoView";
import Dates from "./Dates";
import Calender from "../Calender";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const TODOS_PER_PAGE = 6;

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  // const [newTodoText, setNewTodoText] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAdd, setShowAdd] = useState(false);
  const [showTodo, setShowTodo] = useState(false);

  const openAdd = () => {
    setShowAdd(true);
    setShowTodo(false);
  };

  const closeAdd = () => {
    setShowAdd(false);
  };

  const openTodo = () => {
    setShowTodo(true);
    setShowAdd(false);
  };

  const closeTodo = () => {
    setShowTodo(false);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=30")
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
      setTodos([ newTodo, ...todos]);
      // setNewTodoText("");
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

  const editTodo = (id: number, newText: string) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: newText,
      })
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, title: newText } : todo
          )
        );
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  const [selectedTodo, setSelectedTodo] = useState<TodoItem | null>(null);

  const openTodoView = (id: number) => {
    const todoToShow = todos.find((todo) => todo.id === id);
    if (todoToShow) {
      setSelectedTodo(todoToShow);
    }
  };

  // Function to close TodoView modal
  // const closeTodoView = () => {
  //   setSelectedTodo(null);
  // };

  return (
    <>
      <div className="my-4 d-flex justify-content-between align-items-center">
        <div>
          <h2 className="fw-semibold head mb-1">Good Morning!</h2>
          <p>You got some task to do.</p>
        </div>
        <div className="d-none d-lg-block">
          <button
            className="create-btn p-2 border rounded head"
            onClick={openAdd}
          >
            + Create New Task
          </button>
        </div>
      </div>

      <div>
        <div className="d-lg-flex justify-content-between">
          <div className="first-con pe-3 mb-3">
            <div className="border-bottom">
              <Dates />

              {loading ? (
                <div
                  className="spinner-border text-secondary m-5"
                  role="status"
                ></div>
              ) : (
                <div className="todos">
                  {displayedTodos.map((todo) => (
                    <div>
                      <span
                        className="d-none d-lg-block"
                        onClick={() => {
                          openTodoView(todo.id);
                          openTodo();
                        }}
                      >
                        <Todo
                          id={todo.id}
                          key={todo.id}
                          text={todo.title}
                          completed={todo.completed}
                        />
                      </span>

                      <span
                        onClick={() => openTodoView(todo.id)}
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                        className="d-block d-lg-none"
                      >
                        <Todo
                          id={todo.id}
                          key={todo.id}
                          text={todo.title}
                          completed={todo.completed}
                        />
                      </span>
                    </div>
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
                value={""}
                readOnly
              />
            </div>
          </div>

          <div>
            <div
              className="modal fade"
              id="addBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <AddTodo onAdd={addTodo} closeAdd={closeAdd} />
                </div>
              </div>
            </div>
          </div>

          {selectedTodo && (
            <div
              className="modal fade"
              id="exampleModalToggle"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel"
              tabIndex={-1}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <TodoView
                    id={selectedTodo.id}
                    text={selectedTodo.title}
                    onDelete={deleteTodo}
                    closeTodo={closeTodo}
                    onEdit={(newText) => editTodo(selectedTodo.id, newText)}
                  />
                </div>
              </div>
            </div>
          )}

          {selectedTodo && (
            <div
              className="modal fade"
              id="exampleModalToggle2"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel2"
              tabIndex={-1}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <EditTodo
                    text={selectedTodo.title}
                    onEdit={(newText) => editTodo(selectedTodo.id, newText)}
                    closeEdit={() => setSelectedTodo(null)}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="second-con d-none d-lg-block">
            {showAdd ? (
              <div className="addTask shadow p-3 mb-5 bg-body-tertiary rounded">
                <AddTodo onAdd={addTodo} closeAdd={closeAdd} />
              </div>
            ) : selectedTodo && showTodo ? (
              <div className="addTask shadow p-3 mb-5 bg-body-tertiary rounded">
                <TodoView
                  id={selectedTodo.id}
                  text={selectedTodo.title}
                  onDelete={deleteTodo}
                  closeTodo={closeTodo}
                  onEdit={(newText) => editTodo(selectedTodo.id, newText)}
                />
              </div>
            ) : (
              <>
                <Calender />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
