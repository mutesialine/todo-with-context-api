import React, { useContext, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ToDoContext from "../context/ToDoContext";
const TaskList = () => {
  const {
    toDo,
    handleTaskDone,
    handleTaskDelete,
    handleTaskUpdate,
    handleTaskEdit,
  } = useContext(ToDoContext);
  const [editingValue, setEditingValue] = useState("");
  const handleEdit = (task) => {
    setEditingValue(task.taskName);
    handleTaskEdit(task.id);
  };
  return toDo.length > 0 ? (
    toDo.map((oneTask, index) => (
      <div
        className="flex justify-between items-center w-[50%] border-b-2 border-gray-300 pb-2"
        key={index}
      >
        {oneTask.isEdited === false ? (
          <div className="flex gap-x-5 items-center">
            <input
              type="checkbox"
              checked={oneTask.isTaskDone}
              name={toDo.task}
              onChange={() => handleTaskDone(oneTask.id)}
              className="w-4 h- cursor-pointer"
            />
            <label
              className={`text-2xl text-center text-gray-700 font-semibold ${
                oneTask.isTaskDone && "line-through"
              }`}
              htmlFor="isTaskDone"
            >
              {oneTask.taskName}
            </label>
          </div>
        ) : (
          <div className="text-xl font-semibold w-full outline-none pl-8">
            <input
              type="text"
              value={editingValue}
              onChange={(event) => setEditingValue(event.target.value)}
              onBlur={() =>
                handleTaskUpdate({ taskName: editingValue }, oneTask.id)
              }
            />
          </div>
        )}

        <div className="flex gap-x-2">
          <div
            className="p-2 bg-gray-200 rounded-full cursor-pointer"
            onClick={() => handleEdit(oneTask)}
          >
            <AiFillEdit size={24} className="text-green-500" />
          </div>
          <div
            className="p-2 bg-gray-200 rounded-full cursor-pointer"
            onClick={() => handleTaskDelete(oneTask.id)}
          >
            <AiFillDelete size={24} className="text-red-500" />
          </div>
        </div>
      </div>
    ))
  ) : (
    <h2 className="text-xl font-bold text-gray-400 pt-12">
      what your main focus today ?
    </h2>
  );
};
export default TaskList;