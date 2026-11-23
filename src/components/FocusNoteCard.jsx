import { Check } from "lucide-react";
import FocusNoteProgress from "./FoocusNoteProgress";

const FocusNoteCard = () => {
  return (
    <div className="grid h-[110px] w-[220px] shrink-0 grid-cols-1 grid-rows-1">
      {/* Back card */}
      <div className="col-start-1 row-start-1 h-[93px] w-[194px] self-center justify-self-start rotate-[-6deg] rounded-xl bg-[#B9AFFE47]" />

      {/* Front card */}
      <div className="col-start-1 row-start-1 flex h-[96px] w-[190px] flex-col justify-between self-center justify-self-center rounded-xl bg-white p-[18px] rotate-[3deg]">
        {/* Card heading */}
        <div className="flex items-center gap-3">
          <div className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#E8F9F3]">
            <Check className="h-[16px] w-[16px] text-[#0EA987]" />
          </div>

          <div className="min-w-0">
            <span className="font-['Inter'] text-[9px] leading-[100%] font-bold text-[#8B95AA]">
              NEXT UP
            </span>

            <h3 className="whitespace-nowrap font-['Inter'] text-[13px] leading-[100%] font-bold text-[#252B3B]">
              Design landing page
            </h3>
          </div>
        </div>

        {/* Progress */}
        {/* <div className="flex items-center gap-2">
          <div className="h-[6px] w-[87px] shrink-0 overflow-hidden rounded-full bg-[#EEEAFE]">
            <div className="h-full w-[62%] rounded-full bg-[#6457F5]" />
          </div>

          <span className="font-['Inter'] text-[9px] leading-[100%] font-bold text-[#6457F5]">
            62%
          </span>
        </div> */}
        <FocusNoteProgress />
      </div>
    </div>
  );
};

export default FocusNoteCard;
