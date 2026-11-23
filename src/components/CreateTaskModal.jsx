// import { Calendar, X } from "lucide-react";
// import { useState } from "react";

// const CreateTaskModal = ({ onClose, onCreate, editingTask }) => {
//   const [title, setTitle] = useState(editingTask?.title || "");
//   const [description, setDescription] = useState(
//     editingTask?.description || "",
//   );
//   const [status, setStatus] = useState(editingTask?.status || "todo");
//   const [priority, setPriority] = useState(editingTask?.priority || "medium");
//   const [dueDate, setDueDate] = useState(editingTask?.dueDate || "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Create task button clicked");
//     if (!title.trim()) {
//       setError("Task title is required");
//       return;
//     }

//     if (!dueDate.trim()) {
//       setError("Due date is required");
//       return;
//     }

//     console.log("4. Validation passed");

//     // Convert DD/MM/YYYY into YYYY-MM-DD
//     const dateParts = dueDate.split("/").map((part) => part.trim());

//     if (
//       dateParts.length !== 3 ||
//       !/^\d{2}$/.test(dateParts[0]) ||
//       !/^\d{2}$/.test(dateParts[1]) ||
//       !/^\d{4}$/.test(dateParts[2])
//     ) {
//       setError("Enter date in DD/MM/YYYY format");
//       return;
//     }

//     const [day, month, year] = dateParts;
//     const parsedDate = new Date(Number(year), Number(month) - 1, Number(day));

//     if (
//       parsedDate.getFullYear() !== Number(year) ||
//       parsedDate.getMonth() !== Number(month) - 1 ||
//       parsedDate.getDate() !== Number(day)
//     ) {
//       setError("Please enter a valid date");
//       return;
//     }

//     const formattedDate = `${year}-${month}-${day}`;

//     const newTask = {
//       id: crypto.randomUUID(),
//       title: title.trim(),
//       description: description.trim(),
//       category: "Development",
//       status,
//       priority,
//       dueDate: formattedDate,
//     };

//     onCreate(newTask);
//     onClose();
//   };

//   return (
//     <div className="flex min-h-screen w-full items-center justify-center bg-white">
//       {/* Background */}
//       <div className="h-[822px] w-[760px] bg-[#EDEDF7] pt-[53px] pl-[80px]">
//         {/* White Modal */}
//         <form className="h-[716px] w-[600px] bg-white" onSubmit={handleSubmit}>
//           {/* Heading and Description */}
//           <div className="flex items-center justify-between px-[41px] pt-[34px]">
//             <div>
//               <h2 className="h-[30px] w-[199px] font-['Inter'] text-[25px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]">
//                 Create new task
//               </h2>

//               <p className="mt-[12px] w-[303px] font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
//                 Add your task details to stay on top of your work.
//               </p>
//             </div>

//             <button type="button" onClick={onClose}>
//               <X
//                 size={21}
//                 strokeWidth={1}
//                 className="cursor-pointer text-[#252B3B]"
//               />
//             </button>
//           </div>

//           {/* Horizontal Divider */}
//           <hr className="ml-[41px] mt-[20px] w-[517px] border-t border-black" />

//           {/* Task Title */}
//           <div className="ml-[41px] mt-[20px]">
//             <label
//               htmlFor="task-title"
//               className="font-['Inter'] text-[13px] leading-[100%] font-bold tracking-[0%] text-[#16213B]"
//             >
//               Task title *
//             </label>

//             <input
//               id="task-title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="e.g. Update pricing page"
//               className="mt-[10px] h-[48px] w-[517px] rounded-md border border-[#E7EAF2] px-[15px] font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#16213B] outline-none placeholder:text-[#9AA4B7]"
//             />
//           </div>

//           {/* Description */}
//           <div className="ml-[41px] mt-[26px]">
//             <label
//               htmlFor="task-description"
//               className="font-['Inter'] text-[13px] leading-[100%] font-bold tracking-[0%] text-[#16213B]"
//             >
//               Description
//             </label>

//             <textarea
//               id="task-description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Add notes about this task..."
//               className="mt-[11px] h-[92px] w-[517px] resize-none rounded-md border border-[#E7EAF2] px-[15px] py-3 font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#16213B] outline-none placeholder:text-[#9AA4B7]"
//             />
//           </div>

//           {/* Status and Priority */}
//           <div className="ml-[41px] mt-[27px] flex gap-[31px]">
//             {/* Status */}
//             <div className="flex flex-col">
//               <label
//                 htmlFor="task-status"
//                 className="font-['Inter'] text-[13px] leading-[100%] font-bold text-[#16213B]"
//               >
//                 Status
//               </label>

//               <select
//                 id="task-status"
//                 value={status}
//                 onChange={(e) => setStatus(e.target.value)}
//                 className="mt-[11px] h-[48px] w-[243px] rounded-md border border-[#E7EAF2] bg-white px-3 font-['Inter'] text-[13px] text-[#16213B] outline-none"
//               >
//                 <option value="todo">To do</option>
//                 <option value="in-progress">In Progress</option>
//                 <option value="completed">Completed</option>
//               </select>
//             </div>

//             {/* Priority will be added here */}
//             <div className="flex flex-col">
//               <label
//                 htmlFor="task-priority"
//                 className="font-['Inter'] text-[13px] leading-[100%] font-bold text-[#16213B]"
//               >
//                 Priority
//               </label>
//               <select
//                 id="task-priority"
//                 value={status}
//                 onChange={(e) => setPriority(e.target.value)}
//                 className="mt-[11px] h-[48px] w-[249px] rounded-md border border-[#E7EAF2] bg-white px-3 font-['Inter'] text-[13px] text-[#16213B] outline-none"
//               >
//                 <option value="high">High</option>
//                 <option value="medium">Medium</option>
//                 <option value="low">Low</option>
//               </select>
//             </div>
//           </div>

//           {/* Due Date */}
//           <div className="ml-[41px] mt-[25px]">
//             <label
//               htmlFor="task-due-date"
//               className="font-['Inter'] text-[13px] leading-[100%] font-bold tracking-[0%] text-[#16213B]"
//             >
//               Due date
//             </label>
//             <div className="mt-[11px] flex h-[48px] w-[517px] items-center gap-[10px] rounded-md border border-[#E7EAF2] px-[15px]">
//               <Calendar
//                 size={17}
//                 strokeWidth={1.5}
//                 className="text-[#9AA4B7]"
//               />

//               <input
//                 id="task-due-date"
//                 type="text"
//                 value={dueDate}
//                 onChange={(e) => setDueDate(e.target.value)}
//                 placeholder="DD / MM / YYYY"
//                 className="w-full bg-transparent font-['Inter'] text-[13px] text-[#16213B] outline-none placeholder:text-[#9AA4B7]"
//               />
//             </div>
//             <p className="mt-[12px] font-['Inter'] text-[12px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
//               * Required field
//             </p>
//           </div>
//           <hr className="ml-[41px] mt-[32px] w-[517px] border-t border-[#E7EAF2]" />
//           <div className="ml-[252px] mt-[21px] flex gap-[12px]">
//             <button
//               type="button"
//               onClick={onClose}
//               className="h-[48px] w-[129px] rounded-lg border border-[#E7EAF2] bg-white font-['Inter'] text-[14px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="h-[48px] w-[165px] rounded-lg bg-[#6457F5] font-['Inter'] text-[14px] leading-[100%] font-bold tracking-[0%] text-white"
//             >
//               Create task
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateTaskModal;

import { Calendar, X } from "lucide-react";
import { useState } from "react";

const CreateTaskModal = ({ onClose, onCreate, editingTask }) => {
  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(
    editingTask?.description || "",
  );
  const [status, setStatus] = useState(editingTask?.status || "todo");
  const [priority, setPriority] = useState(editingTask?.priority || "medium");
  const [dueDate, setDueDate] = useState(editingTask?.dueDate || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    if (!dueDate.trim()) {
      setError("Due date is required");
      return;
    }

    // Convert DD/MM/YYYY into YYYY-MM-DD
    const dateParts = dueDate.split("/").map((part) => part.trim());

    if (
      dateParts.length !== 3 ||
      !/^\d{2}$/.test(dateParts[0]) ||
      !/^\d{2}$/.test(dateParts[1]) ||
      !/^\d{4}$/.test(dateParts[2])
    ) {
      setError("Enter date in DD/MM/YYYY format");
      return;
    }

    const [day, month, year] = dateParts;

    const parsedDate = new Date(Number(year), Number(month) - 1, Number(day));

    if (
      parsedDate.getFullYear() !== Number(year) ||
      parsedDate.getMonth() !== Number(month) - 1 ||
      parsedDate.getDate() !== Number(day)
    ) {
      setError("Please enter a valid date");
      return;
    }

    const formattedDate = `${year}-${month}-${day}`;

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      status,
      priority,
      dueDate: formattedDate,
    };

    if (editingTask) {
      // Update existing task while preserving its ID and category
      onCreate({
        ...editingTask,
        ...taskData,
      });
    } else {
      // Create a new task
      onCreate({
        id: crypto.randomUUID(),
        category: "Development",
        ...taskData,
      });
    }

    onClose();
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      {/* Background */}
      <div className="h-[822px] w-[760px] bg-[#EDEDF7] pt-[53px] pl-[80px]">
        {/* White Modal */}
        <form className="h-[716px] w-[600px] bg-white" onSubmit={handleSubmit}>
          {/* Heading and Description */}
          <div className="flex items-center justify-between px-[41px] pt-[34px]">
            <div>
              <h2 className="h-[30px] w-[199px] font-['Inter'] text-[25px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]">
                {editingTask ? "Edit task" : "Create new task"}
              </h2>

              <p className="mt-[12px] w-[303px] font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
                Add your task details to stay on top of your work.
              </p>
            </div>

            <button type="button" onClick={onClose} aria-label="Close modal">
              <X
                size={21}
                strokeWidth={1}
                className="cursor-pointer text-[#252B3B]"
              />
            </button>
          </div>

          {/* Horizontal Divider */}
          <hr className="ml-[41px] mt-[20px] w-[517px] border-t border-black" />

          {/* Task Title */}
          <div className="ml-[41px] mt-[20px]">
            <label
              htmlFor="task-title"
              className="font-['Inter'] text-[13px] leading-[100%] font-bold tracking-[0%] text-[#16213B]"
            >
              Task title *
            </label>

            <input
              id="task-title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError("");
              }}
              placeholder="e.g. Update pricing page"
              className="mt-[10px] h-[48px] w-[517px] rounded-md border border-[#E7EAF2] px-[15px] font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#16213B] outline-none placeholder:text-[#9AA4B7]"
            />

            {error && (
              <p className="mt-1 text-xs text-red-500" role="alert">
                {error}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="ml-[41px] mt-[26px]">
            <label
              htmlFor="task-description"
              className="font-['Inter'] text-[13px] leading-[100%] font-bold tracking-[0%] text-[#16213B]"
            >
              Description
            </label>

            <textarea
              id="task-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add notes about this task..."
              className="mt-[11px] h-[92px] w-[517px] resize-none rounded-md border border-[#E7EAF2] px-[15px] py-3 font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#16213B] outline-none placeholder:text-[#9AA4B7]"
            />
          </div>

          {/* Status and Priority */}
          <div className="ml-[41px] mt-[27px] flex gap-[31px]">
            {/* Status */}
            <div className="flex flex-col">
              <label
                htmlFor="task-status"
                className="font-['Inter'] text-[13px] leading-[100%] font-bold text-[#16213B]"
              >
                Status
              </label>

              <select
                id="task-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mt-[11px] h-[48px] w-[243px] rounded-md border border-[#E7EAF2] bg-white px-3 font-['Inter'] text-[13px] text-[#16213B] outline-none"
              >
                <option value="todo">To do</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Priority */}
            <div className="flex flex-col">
              <label
                htmlFor="task-priority"
                className="font-['Inter'] text-[13px] leading-[100%] font-bold text-[#16213B]"
              >
                Priority
              </label>

              <select
                id="task-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="mt-[11px] h-[48px] w-[249px] rounded-md border border-[#E7EAF2] bg-white px-3 font-['Inter'] text-[13px] text-[#16213B] outline-none"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div className="ml-[41px] mt-[25px]">
            <label
              htmlFor="task-due-date"
              className="font-['Inter'] text-[13px] leading-[100%] font-bold tracking-[0%] text-[#16213B]"
            >
              Due date
            </label>

            <div className="mt-[11px] flex h-[48px] w-[517px] items-center gap-[10px] rounded-md border border-[#E7EAF2] px-[15px]">
              <Calendar
                size={17}
                strokeWidth={1.5}
                className="text-[#9AA4B7]"
              />

              <input
                id="task-due-date"
                type="text"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                placeholder="DD / MM / YYYY"
                className="w-full bg-transparent font-['Inter'] text-[13px] text-[#16213B] outline-none placeholder:text-[#9AA4B7]"
              />
            </div>

            <p className="mt-[12px] font-['Inter'] text-[12px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
              * Required field
            </p>
          </div>

          <hr className="ml-[41px] mt-[32px] w-[517px] border-t border-[#E7EAF2]" />

          {/* Buttons */}
          <div className="ml-[252px] mt-[21px] flex gap-[12px]">
            <button
              type="button"
              onClick={onClose}
              className="h-[48px] w-[129px] rounded-lg border border-[#E7EAF2] bg-white font-['Inter'] text-[14px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-[48px] w-[165px] rounded-lg bg-[#6457F5] font-['Inter'] text-[14px] leading-[100%] font-bold tracking-[0%] text-white"
            >
              {editingTask ? "Save changes" : "Create task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
