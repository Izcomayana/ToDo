import React, { useState } from "react";

interface TodoProps {
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ text, completed }) => {
  const [check, setCheck] = useState(completed);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div>
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
      </div>
    </div>
  );
};

export default Todo;
