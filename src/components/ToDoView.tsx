import React, { useState } from "react";
import EditToDo from "./EditToDo";
import calender from "../assets/images/calendar.png";
import time from "../assets/images/time.png";

interface TodoViewProps {
  id: number;
  text: string;
  onDelete: (id: number) => void;
  closeTodo: () => void;
  onEdit: (newText: string) => void;
}

const TodoView: React.FC<TodoViewProps> = ({
  id,
  text,
  onDelete,
  closeTodo,
  onEdit,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  const openEdit = () => {
    setShowEdit(true);
  };

  const closeEdit = () => {
    setShowEdit(false);
  };

  return (
    <>
      <div className="addTask">
        {showEdit ? (
          <EditToDo
            text={text}
            closeEdit={closeEdit}
            onEdit={(newText) => {
              onEdit(newText);
              setNewText(newText);
            }}
          />
        ) : (
          <div className="d-flex flex-column justify-content-between m-3">
            <div className="modal-header border-bottom-0 ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
               <span className="d-lg-none">{text}</span>
               <span className="d-none d-lg-block">{newText}</span>
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
              <div className="my-lg-2">
                <div className="d-flex mb-2">
                  <div className="me-2">
                    <img src={calender} alt="calender" />
                  </div>

                  <p>20th January, 2023</p>
                </div>
                <div className="d-flex">
                  <div className="me-2">
                    <img src={time} alt="time" />
                  </div>

                  <p>8:00 - 10:00 AM</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-top-0">
              <div className="btn-con w-100 d-flex justify-content-between">
                <button
                  className="cancel-btn bg-transparent py-2 border rounded head d-lg-none"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
                <button
                  className="cancel-btn bg-transparent py-2 border rounded head d-none d-lg-block"
                  onClick={() => {
                    onDelete(id);
                    closeTodo();
                  }}
                >
                  Delete
                </button>

                <button
                  className="add-btn py-2 border rounded head d-lg-none"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>

                <button
                  className="add-btn py-2 border rounded head d-none d-lg-block"
                  onClick={() => {
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
