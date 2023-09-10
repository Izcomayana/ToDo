import React, { useState } from "react";
import EditToDo from "./EditToDo";
import calender from "../assets/images/calendar.png";
import time from "../assets/images/time.png";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  closeTodo: () => void;
}

const TodoView: React.FC<TodoProps> = ({
  id,
  text,
  completed,
  onEdit,
  onDelete,
  closeTodo,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  const openEdit = () => {
    setShowEdit(true);
  };

  const closeEdit = () => {
    setShowEdit(false);
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <>
      <div className="addTask">
        {showEdit ? (
          <EditToDo closeEdit={closeEdit} />
        ) : (
          <div className="d-flex flex-column justify-content-between m-3">
            <div className="modal-header border-bottom-0 ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Task
              </h1>
              <button
                type="button"
                className="btn-close d-lg-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <button
                type="button"
                className="btn-close d-none d-lg-block"
                onClick={closeTodo}
              ></button>
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer border-top-0">
              <div className="btn-con w-100 d-flex justify-content-between">
                <button
                  className="cancel-btn bg-transparent py-2 border rounded head d-lg-none"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="cancel-btn bg-transparent py-2 border rounded head d-none d-lg-block"
                  onClick={() => {
                    handleDelete();
                    closeTodo();
                  }}
                >
                  Delete
                </button>

                <button
                  className="add-btn py-2 border rounded head d-lg-none"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  onClick={handleEdit}
                >
                  Edit
                </button>

                <button
                  className="add-btn py-2 border rounded head d-none d-lg-block"
                  onClick={() => {
                    handleEdit();
                    openEdit();
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoView;
