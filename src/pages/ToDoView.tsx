import React from "react";
// import { useParams } from 'react-router-dom';

interface TodoViewProps {
  id: number;
  text: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoView: React.FC<TodoViewProps> = ({ id, text, onEdit, onDelete }) => {
  // const [isEditing, setEditing] = useState(false);
  // const [newText, setNewText] = useState(text);
  // const [check, setCheck] = useState(completed);

  // const handleEditClick = () => {
  //   setEditing(true);
  // };

  // const handleSaveClick = () => {
  //   onEdit(id, newText);
  //   setEditing(false);
  // };

  // const { id } = useParams();

  const handleEditClick = () => {
    const newText = prompt("Edit Todo:", text);
    if (newText !== null && newText !== text) {
      onEdit(id, newText);
    }
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div>
      {/* <div>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button onClick={handleSaveClick}>Save</button>
      </div> */}
      <h2>Todo Details</h2>
      <p>Title: {text}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default TodoView;
