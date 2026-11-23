import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  onToggleTask,
  openMenuId,
  setOpenMenuId,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <ul className="flex flex-col gap-[12px] mt-[16px]">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          openMenuId={openMenuId}
          setOpenMenuId={setOpenMenuId}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
