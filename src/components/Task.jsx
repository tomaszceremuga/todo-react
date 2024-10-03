import { useState } from "react";

export const Task = ({ text, id, deleteTask }) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className="w-full">
      <hr className="w-full mt-5 mb-5" />

      <div className="w-full flex mt-2">
        <p
          className={`text-xl h-fit w-full mt- ${
            isDone ? "line-through" : ""
          } `}
        >
          {text}
        </p>

        {!isDone && (
          <button
            onClick={() => {
              setIsDone(true);
            }}
            className=" border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white p-1 ml-3 rounded h-full "
          >
            Zrobione
          </button>
        )}
        <button
          onClick={() => {
            console.log("kasuj " + id);
            deleteTask(id);
          }}
          className=" border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white p-1 ml-3 rounded h-full "
        >
          Usuń
        </button>
      </div>
    </div>
  );
};
