import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FocusNotes from "../components/FocusNotes";
import SummaryCards from "../components/SummaryCards";
import MyTasks from "../components/MyTasks";
import CreateTaskModal from "../components/CreateTaskModal";
import { useState } from "react";
import useTasks from "../hooks/useTasks";

const Dashboard = () => {
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const { tasks, setTasks } = useTasks();
  const [editingTask, setEditingTask] = useState(null);

  // const handleCreateTask = (newTask) => {
  //   console.log("Dashboard received:", newTask);
  //   setTasks((previousTasks) => [newTask, ...previousTasks]);
  // };

  const handleCreateTask = (taskData) => {
    if (editingTask) {
      // Update the existing task
      setTasks((previousTasks) =>
        previousTasks.map((task) =>
          task.id === editingTask.id ? taskData : task,
        ),
      );
    } else {
      // Add a new task
      setTasks((previousTasks) => [taskData, ...previousTasks]);
    }
  };

  const handleDeleteTask = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmed) return;

    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId),
    );
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleToggleTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id !== taskId) return task;

        if (task.status === "completed") {
          return {
            ...task,
            status: task.previousStatus || "todo",
            previousStatus: undefined,
          };
        }

        return {
          ...task,
          previousStatus: task.status,
          status: "completed",
        };
      }),
    );
  };
  if (isCreateTaskOpen || editingTask) {
    return (
      <CreateTaskModal
        onClose={() => {
          setIsCreateTaskOpen(false);
          setEditingTask(null);
        }}
        onCreate={handleCreateTask}
        editingTask={editingTask}
      />
    );
  }

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Header />

        <div className="bg-[#F6F7FB] pt-[33px] px-[45px] max-[1199px]:px-[20px] max-[1199px]:pt-[26px]">
          <div className="w-full max-w-[1106px]">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-['Inter'] text-[31px] leading-[100%] font-bold tracking-[0%] max-[1199px]:text-[28px] max-[1199px]:h-[34px] max-[1199px]:leading-[100%] max-[1199px]:tracking-[0%] max-[1199px]:font-bold">
                  Your work,
                  <br className="hidden max-[1199px]:block" />{" "}
                  <span>in focus.</span>
                </h1>
                <p className="block max-[1199px]:hidden pt-[8px] font-['Inter'] text-[14px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
                  Plan your day, stay organized, and celebrate small wins.
                </p>
                <p className="hidden max-[1199px]:block mt-[30px]">
                  Stay organized and keep moving forward.
                </p>
              </div>
              <button
                className="mt-[1px] h-[46px] w-[171px] shrink-0 hidden rounded-lg bg-[#6457F5] font-['Inter'] text-[14px] leading-[100%] font-bold tracking-[0%] text-white min-[1200px]:block "
                onClick={() => setIsCreateTaskOpen(true)}
              >
                New Task
              </button>
            </div>
            {/* caurosol */}
            <FocusNotes />
            <SummaryCards tasks={tasks} />
            <MyTasks
              tasks={tasks}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleEditTask}
              onAddTask={() => setIsCreateTaskOpen(true)}
            />
          </div>
          {/* heading and newtask */}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
