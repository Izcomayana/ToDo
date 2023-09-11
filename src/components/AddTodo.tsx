import React, { useState } from "react";
import notification from "../assets/images/bell.png";
import close from "../assets/images/x-close.png";

interface AddProps {
  onAdd: (newText: string) => void;
  closeAdd: () => void;
}

const AddTodo: React.FC<AddProps> = ({ onAdd, closeAdd }) => {
  const [newTodoText, setNewTodoText] = useState("");
  const [showAlarm, setShowAlarm] = useState(true);

  const handleAdd = () => {
    onAdd(newTodoText);
    console.log("added", newTodoText);
    setNewTodoText("");
    setShowAlarm(true);
  };

  return (
    <>
      <div className="addTask">
        <div className="d-flex flex-column justify-content-between my-2">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Add Task
            </h1>
            <button
              type="button"
              className="btn-close d-lg-none"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowAlarm(true)}
            ></button>

            <button
              type="button"
              className="btn-close d-none d-lg-block"
              onClick={closeAdd}
            ></button>
          </div>
          <div className="modal-body py-0">
            <textarea
              name=""
              id=""
              cols={40}
              rows={5}
              className="rounded p-2 w-100 mt-lg-3"
              placeholder="Add a new todo"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            ></textarea>
          </div>
          <div className="p-3 p-lg-0 border-top-0">
            <div className="my-3 d-flex justify-content-between">
              <input
                type="date"
                name=""
                id=""
                placeholder="Today"
                className="border rounded p-1 date"
              />
              <input type="time" name="" id="" className="border rounded p-1" />
              <input type="time" name="" id="" className="border rounded p-1" />
            </div>
            {showAlarm ? (
              <div className="d-flex justify-content-between mb-4">
                <span className="d-flex w-75">
                  <img src={notification} alt="notification" className="me-2" />
                  <p>10 Minutes before</p>
                </span>
                <span>
                  <img
                    src={close}
                    alt="x-close"
                    onClick={() => setShowAlarm(false)}
                  />
                </span>
              </div>
            ) : (
              <></>
            )}
            <div className="btn-con d-flex justify-content-between">
              <button
                className="cancel-btn bg-transparent py-2 border rounded head d-lg-none"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowAlarm(true)}
              >
                Cancel
              </button>
              <button
                className="cancel-btn bg-transparent py-2 border rounded head d-none d-lg-block"
                onClick={closeAdd}
              >
                Cancel
              </button>
              <button
                className="add-btn py-2 border rounded head"
                disabled={newTodoText == ""}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  handleAdd();
                  setShowAlarm(true);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
