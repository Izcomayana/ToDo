import React, { useState } from "react";
import notification from "../assets/images/bell.png";
import close from "../assets/images/x-close.png";

interface EditProps {
  text: string;
  onEdit: (newText: string) => void;
  closeEdit: () => void;
}

const EditTodo: React.FC<EditProps> = ({ text, onEdit, closeEdit }) => {
  const [newText, setNewText] = useState(text);

  const handleSaveClick = () => {
    onEdit(newText);
  };

  return (
    <>
      <div className="addTask">
        <div className="d-flex flex-column justify-content-between my-2">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
              Edit Task
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
              onClick={closeEdit}
            ></button>
          </div>
          <div className="modal-body py-0 mt-lg-3">
            <textarea
              name=""
              id=""
              cols={40}
              rows={5}
              className="rounded p-2 w-100"
              placeholder="Add a new todo"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            ></textarea>
          </div>
          <div className="p-3 border-top-0 p-lg-0">
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
                className="cancel-btn bg-transparent py-2 border rounded head d-lg-none"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Cancel
              </button>
              <button
                className="cancel-btn bg-transparent py-2 border rounded head d-none d-lg-block"
                onClick={closeEdit}
              >
                Cancel
              </button>

              <button
                className="add-btn py-2 border rounded head d-lg-none"
                disabled={newText == ""}
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="add-btn py-2 border rounded head d-none d-lg-block"
                disabled={newText == ""}
                onClick={() => {
                  handleSaveClick();
                  closeEdit();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
