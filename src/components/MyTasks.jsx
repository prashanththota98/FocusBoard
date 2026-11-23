import { Search, ChevronDown } from "lucide-react";

import TaskList from "./TaskList";
import { useState, useEffect } from "react";

const MyTasks = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
  onAddTask,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("all");
  const [openMenuId, setOpenMenuId] = useState(null);
  console.log(priorityFilter);

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenuId(null);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPriority =
      priorityFilter === "all" || task.priority === priorityFilter;

    const matchesStatus = activeTab === "all" || task.status === activeTab;

    return matchesSearch && matchesPriority && matchesStatus;
  });

  return (
    <section className="mt-[41px]">
      <div className="flex justify-between">
        <div>
          <h2 className="font-['Inter'] text-[23px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]">
            My Tasks
          </h2>
          <p className="block max-[1199px]:hidden mt-[9px] font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
            Manage and track everything in one place.
          </p>
          <p className="hidden max-[1199px]:block">
            Your priorities for this week
          </p>
        </div>

        <button
          onClick={onAddTask}
          aria-label="Add new task"
          className="hidden max-[1199px]:block flex h-9 w-9 items-center justify-center rounded-lg bg-[#6457F5] text-2xl text-white min-[1200px]:hidden"
        >
          +
        </button>
      </div>

      <div className="mt-[36px] flex flex-wrap items-center justify-between gap-4 max-[1200px]:flex-col">
        {/* Status Tabs */}
        <div className="flex items-center gap-6 max-[1200px]:order-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`h-[33px] w-[118px] rounded-md font-['Inter'] text-[12px] leading-none font-bold text-center transition-colors ${
              activeTab === "all"
                ? "bg-[#F0EEFF] text-[#6457F5]"
                : "bg-transparent text-[#9AA4B7] hover:text-[#68758E]"
            }`}
          >
            All Tasks {""}
            <span className="text-[12px]">{tasks.length}</span>
          </button>

          <button
            onClick={() => setActiveTab("in-progress")}
            className={`h-[33px] w-[118px] rounded-md font-['Inter'] text-[12px] leading-none font-bold text-center transition-colors ${
              activeTab === "in-progress"
                ? "bg-[#F0EEFF] text-[#6457F5]"
                : "bg-transparent text-[#9AA4B7] hover:text-[#68758E]"
            }`}
          >
            In Progress
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`h-[33px] w-[118px] rounded-md font-['Inter'] text-[12px] leading-none font-bold text-center transition-colors ${
              activeTab === "completed"
                ? "bg-[#F0EEFF] text-[#6457F5]"
                : "bg-transparent text-[#9AA4B7] hover:text-[#68758E]"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Search and Priority Filter */}
        <div className="flex items-center gap-[13px] max-[1200px]:w-full max-[1200px]:order-1 max-[1200px]:flex-1">
          {/* Search */}
          <div className="flex h-[37px] w-[210px] items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 max-[1200px]:w-full">
            <Search size={15} className="shrink-0 text-[#9AA4B7]" />

            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full bg-transparent font-['Inter'] text-[12px] outline-none placeholder:text-[#9AA4B7]"
            />
          </div>

          {/* Priority Dropdown */}
          <div className="relative block max-[1199px]:hidden">
            <select
              value={priorityFilter}
              onChange={(event) => setPriorityFilter(event.target.value)}
              className="h-[37px] w-[207px] appearance-none rounded-lg border border-[#E5E7EB] bg-white px-3 pr-9 font-['Inter'] text-[12px] text-[#68758E] outline-none"
            >
              <option value="all">Priority: All</option>
              <option value="high">Priority: High</option>
              <option value="medium">Priority: Medium</option>
              <option value="low">Priority: Low</option>
            </select>

            <ChevronDown
              size={15}
              className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[#68758E]"
            />
          </div>
        </div>
      </div>
      <TaskList
        tasks={filteredTasks}
        onToggleTask={onToggleTask}
        openMenuId={openMenuId}
        setOpenMenuId={setOpenMenuId}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
    </section>
  );
};

export default MyTasks;
