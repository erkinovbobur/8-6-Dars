import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleAdd = () => {
    if (task.trim() !== '') {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="flex-grow p-2 border rounded-l-lg"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button
        onClick={handleAdd}
        className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
