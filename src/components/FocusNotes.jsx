import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import focusNotes from "../data/focusNotes";
import FocusNoteCard from "./FocusNoteCard";
import FocusNoteProgress from "./FoocusNoteProgress";

const FocusNotes = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = focusNotes[activeSlide];
  const [activeArrow, setActiveArrow] = useState("next");

  //   const previousSlide = () => {
  //     setActiveSlide((prev) => (prev === 0 ? focusNotes.length - 1 : prev - 1));
  //   };

  //   const nextSlide = () => {
  //     setActiveSlide((prev) => (prev + 1) % focusNotes.length);
  //   };

  const previousSlide = () => {
    setActiveArrow("previous");
    setActiveSlide((prev) => (prev === 0 ? focusNotes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveArrow("next");
    setActiveSlide((prev) => (prev + 1) % focusNotes.length);
  };

  const highlightedArrow =
    activeSlide === 0
      ? "next"
      : activeSlide === focusNotes.length - 1
        ? "previous"
        : activeArrow;

  return (
    <section className="mt-[32px] flex min-h-[152px] w-full flex-col gap-5 rounded-xl bg-gradient-to-br from-[#7165FF] to-[#4C3FD2] px-4 py-5 xl:h-[152px] xl:flex-row xl:items-center xl:gap-0 xl:px-0 xl:py-0">
      {/* Left content */}
      <div className="min-w-0 flex-1 xl:ml-[38px]">
        {/* Label and slide counter */}
        <div className="flex items-center gap-9">
          <h3 className="block max-[1199px]:hidden font-['Inter'] text-[11px] leading-[100%] font-bold text-[#DED9FF]">
            FOCUS NOTES
          </h3>
          <h3 className="hidden max-[1199px]:block font-['Inter'] text-[11px] leading-[100%] font-bold tracking-[0%] text-[#DED9FF]">
            GOOD AFTERNOON
          </h3>

          <span className="block max-[1199px]:hidden font-['Inter'] text-[11px] leading-[100%] font-bold text-[#BEB7FF]">
            {String(activeSlide + 1).padStart(2, "0")} /{" "}
            {String(focusNotes.length).padStart(2, "0")}
          </span>
        </div>

        {/* Slide heading */}
        <h2 className="mt-[12px] font-['Inter'] text-[25px] leading-[100%] font-bold text-white xl:text-[29px]">
          {currentSlide.heading}
        </h2>

        {/* Slide description */}
        <p className="block max-[1199px]:hidden mt-[8px] font-['Inter'] text-[14px] leading-[100%] font-normal text-[#E9E6FF]">
          {currentSlide.description}
        </p>

        <p className="hidden max-[1199px]:block font-['Inter'] font-normal text-[12px] leading-[100%] tracking-[0%] text-[#ECEAFF] mt-[10px]">
          3 tasks waiting for your attention.
        </p>

        {/* Slide indicators */}
        <div className="block max-[1199px]:hidden mt-[28px] flex items-center gap-2 xl:mt-[29px]">
          {focusNotes.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className={`h-[3px] rounded-full transition-all ${
                activeSlide === index
                  ? "w-[45px] bg-white"
                  : "w-[45px] bg-white/25"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>
        <FocusNoteProgress className="hidden max-[1199px]:block w-[204px] h-[6px] ml-[20px] mt-[30px] opacity-[0.32] text-[#ffffff]" />
      </div>
      {/* ml-auto flex min-w-0 items-center gap-3 xl:mr-[32px] xl:gap-[clamp(16px,5vw,76px) */}
      {/* Right content: card and arrows */}
      <div className="ml-auto hidden shrink-0 items-center gap-3 min-[1280px]:flex min-[1280px]:mr-[32px] min-[1280px]:gap-[76px]">
        <FocusNoteCard />

        {/* Navigation arrows */}
        <div className="flex items-center gap-[10px]">
          <button
            onClick={previousSlide}
            className={`flex h-[38px] w-[38px] items-center justify-center rounded-full transition-colors ${
              highlightedArrow === "previous"
                ? "bg-white text-[#6457F5]"
                : "bg-white/25 text-white"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className={`flex h-[40px] w-[40px] items-center justify-center rounded-full transition-colors ${
              highlightedArrow === "next"
                ? "bg-white text-[#6457F5]"
                : "bg-white/25 text-white"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FocusNotes;
