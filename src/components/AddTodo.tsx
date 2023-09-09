import React, { useState } from "react";
import notification from "../assets/images/bell.png";
import close from "../assets/images/x-close.png";

interface AddProps {
  onAdd: (newText: string) => void;
}

const AddTodo: React.FC<AddProps> = ({ onAdd }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAdd = () => {
    onAdd(newTodoText); // Pass newTodoText to onAdd
    console.log("added", newTodoText);
    setNewTodoText("");
    // console.log('added in addTodo')
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
              placeholder="Add a new todo"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
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
              <input type="time" name="" id="" className="border rounded p-1" />
              <input type="time" name="" id="" className="border rounded p-1" />
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span className="d-flex w-75">
                <img src={notification} alt="notification" className="me-2" />
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
              <button
                className="add-btn py-2 border rounded head"
                disabled={newTodoText == ""}
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleAdd}
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
