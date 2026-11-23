const FocusNoteProgress = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center gap-2 max-[1199px]:flex-column ${className}`}
    >
      <div className="h-[6px] w-[87px] shrink-0 overflow-hidden rounded-full bg-[#EEEAFE]">
        <div className="h-full w-[62%] rounded-full bg-[#6457F5]" />
      </div>

      <span className="font-['Inter'] text-[9px] leading-[100%] font-bold text-[#6457F5] max-[1199px]:text-[#ffffff]">
        62%
      </span>
    </div>
  );
};

export default FocusNoteProgress;
