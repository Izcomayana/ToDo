import React, { useState } from "react";
import calender from "../assets/images/calendar.png";
import time from "../assets/images/time.png";
import close from "../assets/images/x-close.png";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoView: React.FC<TodoProps> = ({ id, text, completed, onEdit, onDelete }) => {
  // const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  // const [check, setCheck] = useState(completed);

  // const handleEdit = () => {
  //   setEditing(true);
  // };

  // const handleSaveClick = () => {
  //   onEdit(id, newText);
  //   setEditing(false);
  // };

  const handleEdit = () => {
    const newText = prompt("Edit Todo:", text);
    if (newText !== null && newText !== text) {
      onEdit(id, newText);
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <>
      <div className="addTask">
        <div className="d-flex flex-column justify-content-between m-3">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Task
            </h1>
            <span>
              <img src={close} alt="x-close" />
            </span>
          </div>
          <div className="my-2">
            Task: {text}
            
            <div className="d-flex">
              <div className="me-2">
                <img src={calender} alt="calender" />
              </div>
              
              <p>20th January, 2023</p>
            </div>
            <div className="d-flex">
              <div className="me-2">
                <img src={time} alt="time" />
              </div>
              
              <p>20th January, 2023</p>
            </div>
          </div>
          <div className="btn-con d-flex justify-content-between">
            <button
              className="cancel-btn bg-transparent py-2 border rounded head"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="add-btn py-2 border rounded head"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoView;
