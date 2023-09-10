import React, { useState } from "react";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const Todo: React.FC<TodoProps> = ({
  id,
  text,
  completed,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const [check, setCheck] = useState(completed);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, newText);
    setEditing(false);
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <div className="mb-3">
            <div className="tasks d-flex flex-column justify-content-between">
              <div className="task d-flex align-items-center justify-content-between shadow-sm">
                <div className="d-flex align-items-center">
                  <input
                    className="form-check-input me-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={check}
                    onClick={handleCheck}
                  />
                  <label className="form-check-label d-flex flex-column">
                    <span
                      className={
                        "text-decoration-none " +
                        " " +
                        (check ? "done" : "pending")
                      }
                    >
                      {text}
                    </span>
                    <span>10:30 am to 11:30 am</span>
                  </label>
                </div>
                <div>
                  <p>Today</p>
                </div>
              </div>
            </div>
          </div>
          {/* <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button> */}
        </div>
      )}
    </div>
  );
};

export default Todo;
