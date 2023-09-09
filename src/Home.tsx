import { useState } from "react";
import TodoList from "./components/ToDoList";
import "./App.css";
import Navbar from "./components/navbar";
import AddTask from "./components/AddTask";
// import mic from "./assets/images/mic.png";
import notification from "./assets/images/bell.png";
import close from "./assets/images/x-close.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <header className="mt-4 border-bottom">
        <Navbar />
      </header>
      <main className="container">
        <div className="my-4 d-flex justify-content-between align-items-center">
          <div>
            <h2 className="fw-semibold head mb-1">Good Morning!</h2>
            <p>You got some task to do.</p>
          </div>
          <div className="d-none d-lg-block">
            <button className="create-btn p-2 border rounded head">
              + Create New Task
            </button>
          </div>
        </div>

        <div>
          <TodoList />
        </div>

        {isVisible && (
          <div className={`hidden-div ${isVisible ? "show" : ""}`}>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              {/* <div className="modal-dialog">
                <div className="modal-content">
                  <div className="addTask">
                    <div className="d-flex flex-column justify-content-between my-2">
                      <div className="modal-header border-bottom-0">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Add Task
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body py-0">
                        <textarea
                          name=""
                          id=""
                          cols="40"
                          rows="5"
                          className="rounded p-2 w-100"
                        ></textarea>
                      </div>
                      <div className="p-3 border-top-0">
                        <div className="my-3 d-flex justify-content-between">
                          <input
                            type="date"
                            name=""
                            id=""
                            placeholder="Today"
                            className="border rounded p-1 date"
                          />
                          <input
                            type="time"
                            name=""
                            id=""
                            className="border rounded p-1"
                          />
                          <input
                            type="time"
                            name=""
                            id=""
                            className="border rounded p-1"
                          />
                        </div>
                        <div className="d-flex justify-content-between mb-4">
                          <span className="d-flex w-75">
                            <img
                              src={notification}
                              alt="notification"
                              className="me-2"
                            />
                            <p>10 Minutes before</p>
                          </span>
                          <span>
                            <img src={close} alt="x-close" />
                          </span>
                        </div>
                        <div className="btn-con d-flex justify-content-between">
                          <button
                            className="cancel-btn bg-transparent py-2 border rounded head"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Cancel
                          </button>
                          <button className="add-btn py-2 border rounded head">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="modal-dialog">
                <div className="modal-content">
                  <AddTask />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="my-3 mb-5 container d-lg-none">
        <div className="">
          <input
            type="text"
            className="border w-100 rounded p-2"
            placeholder="Input Task"
            onClick={toggleVisibility}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          />
          {/* <img src={mic} alt="mic" /> */}
        </div>
      </footer>
    </>
  );
}
