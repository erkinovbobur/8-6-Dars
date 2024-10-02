import React, { useState } from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`flex justify-between items-center p-2 border-b ${completed ? 'line-through text-gray-500' : ''}`}>
      <div className="flex items-center w-full overflow-hidden">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          className="mr-2"
        />
        {/* If editing, show input field, otherwise show text */}
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="flex-grow p-1 border rounded"
          />
        ) : (
          <span className="flex-grow overflow-hidden whitespace-nowrap text-ellipsis max-w-full">
            {text}
          </span>
        )}
      </div>
      <div className="flex items-center">
        <button
          onClick={handleEdit}
          className="text-blue-500 hover:text-blue-700 ml-2"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => deleteTodo(id)}
          className="text-red-500 hover:text-red-700 ml-4"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
