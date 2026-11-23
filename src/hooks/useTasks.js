import { useEffect, useState } from "react";
import initialTasks from "../data/tasks";

const STORAGE_KEY = "focusboard-tasks";

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);

      return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    } catch (error) {
      console.error("Failed to load tasks:", error);
      return initialTasks;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return { tasks, setTasks };
};

export default useTasks;
