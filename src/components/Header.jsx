// import { ChevronDown } from "lucide-react";

// const Header = () => {
//   return (
//     <header className="flex items-center justify-between pr-[50.75px] h-[85px]">
//       {/* Breadcrumb */}
//       <div className="flex items-center gap-2 mt-[38px] font-['Inter'] text-[13px] leading-[100%] tracking-[0%] text-sm">
//         <span className=" text-[#9AA4B7] ml-[44px]">Workspace</span>

//         <span className="text-sm text-[#CBD5E1] ml-[8px]">/</span>

//         <span className="text-sm font-semibold text-[#252B3B] ml-[18px]">
//           Overview
//         </span>
//       </div>

//       {/* Right section */}
// <div className="mt-[22px] flex items-center gap-[14.75px]">
//   {/* User avatar */}
//   <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E8E7FF] text-sm font-semibold text-[#6257E8]">
//     PT
//   </div>

//   <ChevronDown size={12} strokeWidth={1.27} className="text-[#64748B]" />
// </div>
//     </header>
//   );
// };

// export default Header;

import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-[85px] items-center justify-between pr-[50.75px] max-[1199px]:h-[72px] max-[1199px]:px-4">
      {/* Desktop Breadcrumb */}
      <div className="mt-[38px] flex items-center gap-2 font-['Inter'] text-[13px] leading-[100%] tracking-[0%] text-sm max-[1199px]:hidden">
        <span className="ml-[44px] text-[#9AA4B7]">Workspace</span>
        <span className="ml-[8px] text-sm text-[#CBD5E1]">/</span>
        <span className="ml-[18px] text-sm font-semibold text-[#252B3B]">
          Overview
        </span>
      </div>

      {/* Mobile Logo and Brand */}
      <div className="hidden max-[1199px]:flex items-center gap-[12px] max-[1199px]:h-[81px]">
        {/* Logo */}
        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7066FF] to-[#5246DB]">
          <div className="grid grid-cols-2 gap-1">
            <span className="h-[7px] w-[7px] rounded-[2px] bg-white" />
            <span className="h-[7px] w-[7px] rounded-[2px] bg-white" />
            <span className="h-[7px] w-[7px] rounded-[2px] bg-white" />
            <span className="h-[7px] w-[7px] rounded-[2px] bg-[#B9B4FF]" />
          </div>
        </div>

        {/* Brand name */}
        <h2 className="font-['Inter'] text-[19px] leading-[100%] font-bold tracking-[0%] text-[#16213B]">
          FocusBoard
        </h2>
      </div>

      {/* Right section */}

      {/* <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#E8E7FF] font-['Inter'] text-[12px] leading-[100%] font-bold text-[#6257E8]">
        PT
      </div> */}

      <div className="mt-[22px] flex items-center gap-[14.75px]">
        {/* User avatar */}
        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E8E7FF] text-sm font-semibold text-[#6257E8]">
          PT
        </div>

        <ChevronDown
          size={12}
          strokeWidth={1.27}
          className="text-[#64748B] block max-[1199px]:hidden"
        />
      </div>
    </header>
  );
};

export default Header;
