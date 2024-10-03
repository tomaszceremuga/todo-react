import { useState } from "react";

export const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({});
  const [id, setId] = useState(0);
  const [isBtnRed, setIsBtnRed] = useState(false);

  const handleInputChange = (e) => {
    setTask({
      text: e.target.value,
      isDone: false,
      id: id,
    });
    if (task.value != "") {
      setIsBtnRed(false);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (task.text != "") {
      setId((prevId) => prevId + 1);
      addTask(task);
      setTask({ text: "" });
      setIsBtnRed(true);
    }
  };

  return (
    <form className="w-full flex mt-7">
      <input
        value={task.text || ""}
        onChange={handleInputChange}
        className=" border p-2 rounded w-full "
        type="text"
      />
      <button
        type="submit"
        onClick={handleAdd}
        className={` border  p-2 ml-3 rounded h-full ${
          isBtnRed
            ? "border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
            : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
        } `}
      >
        Dodaj
      </button>
    </form>
  );
};
