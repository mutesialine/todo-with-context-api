import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const ToDo = () => {
  return (
    <div className=" w-full max-w-7xl mx-auto pt-24 flex flex-col gap-y-8 justify-center items-center">
      <h1 className="text-8xl font-bold text-gray-400 opacity-20">todos</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default ToDo;