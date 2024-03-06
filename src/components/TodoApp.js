import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const startEditing = (index, task) => {
    setEditingIndex(index);
    setEditedTask(task);
  };

  const saveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditedTask('');
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>

      {/* Add Task Section */}
      <div className="mb-4 flex">
        <input
          type="text"
          className="border border-gray-400 p-2 flex-1 rounded-md"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 ml-2 rounded-md"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* Task List Section */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  className="border border-gray-400 p-2 flex-1 rounded-md"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white p-2 ml-2 rounded-md"
                  onClick={() => saveTask(index)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <div>
                  <button
                    className="bg-yellow-500 text-white p-2 rounded-md"
                    onClick={() => startEditing(index, task)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 ml-2 rounded-md"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
