import { ListTodo, Clock4, Check } from "lucide-react";
import tasks from "../data/tasks";

const SummaryCards = ({ tasks }) => {
  const totalTasks = tasks.length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress",
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  return (
    <section className="mt-[25px] grid w-full grid-cols-1 gap-[22px] md:grid-cols-2 xl:grid-cols-3">
      {/* Total Tasks Card */}
      <div className="h-[126px] rounded-xl border border-[#E5E7EB] bg-white px-[22px] pt-[21px]">
        <div className="grid grid-cols-[44px_1fr] gap-x-[15px] gap-y-[10px]">
          {/* Icon */}
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#EEEAFE]">
            <ListTodo size={22} className="text-[#6457F5]" />
          </div>

          {/* Title */}
          <h3 className="self-center font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
            Total Tasks
          </h3>

          {/* Number */}
          <p className="font-['Inter'] text-[32px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]">
            {totalTasks}
          </p>

          {/* Description */}
          <p className="self-center font-['Inter'] text-[12px] leading-[100%] font-normal tracking-[0%] text-[#9AA4B7]">
            Across all projects
          </p>
        </div>
      </div>

      {/* In Progress Card */}
      <div className="hidden min-[1270px]:block  h-[126px] rounded-xl border border-[#E5E7EB] bg-white px-[22px] pt-[21px]">
        <div className="grid grid-cols-[44px_1fr] gap-x-[15px] gap-y-[10px]">
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#E7F5FC]">
            <Clock4 size={22} className="text-[#2594CA]" />
          </div>

          {/* Title */}
          <h3 className="self-center font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
            In Progress
          </h3>

          {/* Number */}
          <p className="font-['Inter'] text-[32px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]">
            {inProgressTasks}
          </p>

          {/* Description */}
          <p className="self-center font-['Inter'] text-[12px] leading-[100%] font-normal tracking-[0%] text-[#9AA4B7]">
            Keep the momentum
          </p>
        </div>
      </div>

      {/* Completed Card */}
      <div className="h-[126px] rounded-xl border border-[#E5E7EB] bg-white px-[22px] pt-[21px]">
        <div className="grid grid-cols-[44px_1fr] gap-x-[15px] gap-y-[10px]">
          {/* Icon */}
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-xl bg-[#E8FAF3]">
            <Check size={22} className="text-[#0EA987]" />
          </div>

          {/* Title */}
          <h3 className="self-center font-['Inter'] text-[13px] leading-[100%] font-normal tracking-[0%] text-[#68758E]">
            Completed
          </h3>

          {/* Number */}
          <p className="font-['Inter'] text-[32px] leading-[100%] font-bold tracking-[0%] text-[#252B3B]">
            {completedTasks}
          </p>

          {/* Description */}
          <p className="self-center font-['Inter'] text-[12px] leading-[100%] font-normal tracking-[0%] text-[#9AA4B7]">
            Great work this week
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummaryCards;
