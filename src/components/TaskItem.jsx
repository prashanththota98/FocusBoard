import {
  Square,
  SquareCheck,
  MoreHorizontal,
  CalendarDays,
  Pencil,
  Trash2,
} from "lucide-react";
import formatDate from "../utils/formatDate";

const TaskItem = ({
  task,
  onToggleTask,
  openMenuId,
  setOpenMenuId,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <li className="relative flex h-[79px] w-full items-center gap-4 rounded-xl border border-[#E8EAF0] bg-white px-[18px] max-[1199px]:h-[122px] max-[1199px]:w-full max-[1199px]:flex-col max-[1199px]:items-stretch max-[1199px]:justify-between max-[1199px]:gap-0 max-[1199px]:border-[#E7EAF2] max-[1199px]:px-0">
      {/* Top row: Checkbox + Task details */}
      <div className="flex min-w-0 flex-1 items-center gap-[14px] max-[1199px]:w-full max-[1199px]:px-[15px] max-[1199px]:pt-[15px] max-[1199px]:pr-[45px]">
        <button
          type="button"
          onClick={() => onToggleTask(task.id)}
          className="max-[1199px]:h-[26px] max-[1199px]:w-[26px] max-[1199px]:shrink-0"
          aria-label={
            task.status === "completed"
              ? "Mark task as not completed"
              : "Mark task as completed"
          }
        >
          {task.status === "completed" ? (
            <SquareCheck className="text-[#6457F5]" />
          ) : (
            <Square className="text-[#9AA4B7]" />
          )}
        </button>

        <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
          <h3 className="truncate font-['Inter'] text-[14px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]">
            {task.title}
          </h3>

          <p className="truncate font-['Inter'] text-[12px] leading-[100%] font-normal tracking-[0%] text-[#9AA4B7] max-[1199px]:text-[10px]">
            {task.description}
          </p>
        </div>
      </div>

      {/* Right section: Metadata + Desktop menu */}
      <div className="flex shrink-0 items-center gap-[22px] whitespace-nowrap max-[1199px]:contents">
        {/* Bottom row: Category + Priority + Date */}
        <div className="contents max-[1199px]:flex max-[1199px]:w-full max-[1199px]:items-center max-[1199px]:justify-start max-[1199px]:gap-[11px] max-[1199px]:px-[15px] max-[1199px]:pb-[10px]">
          {/* Category */}
          <span className="flex h-[27px] w-[86px] items-center justify-center rounded-md bg-[#F3F1FF] font-['Inter'] text-[12px] leading-[100%] font-bold text-[#6658E3] max-[1199px]:w-[100px] max-[1199px]:shrink-0">
            {task.category}
          </span>

          {/* Priority */}
          <span
            className={`flex h-[27px] w-[72px] shrink-0 items-center justify-center rounded-full font-['Inter'] text-[11px] font-medium ${
              task.priority === "high"
                ? "bg-[#FFF4E5] text-[#BC7A18]"
                : "bg-[#EAF6F4] text-[#14836C]"
            }`}
          >
            {task.priority}
          </span>

          {/* Due date */}
          <div className="flex shrink-0 items-center gap-2">
            <CalendarDays
              size={15}
              className="text-[#9AA4B7] max-[1199px]:h-[10.5px] max-[1199px]:w-[12px]"
            />

            <span className="font-['Inter'] text-[12px] text-[#68758E] max-[1199px]:h-[13px] max-[1199px]:w-[38px] max-[1199px]:text-[11px] max-[1199px]:leading-[100%]">
              {formatDate(task.dueDate)}
            </span>
          </div>
        </div>

        {/* More options */}
        <div className="flex flex-col items-end max-[1199px]:absolute max-[1199px]:top-[15px] max-[1199px]:right-[15px]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenuId((prev) => (prev === task.id ? null : task.id));
            }}
            aria-label="Task options"
            aria-expanded={openMenuId === task.id}
          >
            <MoreHorizontal size={20} className="text-[#68758E]" />
          </button>

          {openMenuId === task.id && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="mt-2 flex flex-col gap-1 rounded-lg border border-[#E8EAF0] bg-white p-1"
            >
              <button
                type="button"
                onClick={() => {
                  onEditTask(task);
                  setOpenMenuId(null);
                }}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-[#F6F7FB]"
              >
                <Pencil size={15} />
                Edit
              </button>

              <button
                type="button"
                onClick={() => {
                  onDeleteTask(task.id);
                  setOpenMenuId(null);
                }}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-50"
              >
                <Trash2 size={15} />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
