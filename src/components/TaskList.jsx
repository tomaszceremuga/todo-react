import { Task } from "./Task";

export const TaskList = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((el) => {
        console.log(el);

        return (
          <Task text={el.text} id={el.id} key={el.id} deleteTask={deleteTask} />
        );
      })}
    </>
  );
};
