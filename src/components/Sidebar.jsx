import { LayoutGrid, List, Calendar, CircleDot } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Overview");

  const navigation = [
    { name: "Overview", icon: LayoutGrid },
    { name: "My Tasks", icon: List },
    { name: "Calendar", icon: Calendar },
    { name: "Settings", icon: CircleDot },
  ];

  return (
    <aside className="w-[244px] min-h-screen shrink-0 max-[1199px]:fixed max-[1199px]:bottom-0 max-[1199px]:left-0 max-[1199px]:z-50 max-[1199px]:h-[72px] max-[1199px]:min-h-0 max-[1199px]:w-full max-[1199px]:border-t max-[1199px]:border-[#E9EBF2] max-[1199px]:bg-white">
      {/* Logo and brand name */}
      <div className="ml-[34px] mt-[29px] flex items-start gap-[13px] max-[1199px]:hidden">
        <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7066FF] to-[#5246DB]">
          <div className="grid grid-cols-2 gap-1">
            <span className="h-[8.6px] w-[8.6px] rounded-[3px] bg-white" />
            <span className="h-[8.6px] w-[8.6px] rounded-[3px] bg-white" />
            <span className="h-[8.6px] w-[8.6px] rounded-[3px] bg-white" />
            <span className="h-[8.6px] w-[8.6px] rounded-[3px] bg-[#B9B4FF]" />
          </div>
        </div>
        <h2 className="mt-[7px] font-['Inter'] text-[21px] leading-[100%] font-bold">
          FocusBoard
        </h2>
      </div>

      <div className="ml-[35px] mt-[50px] max-[1199px]:hidden">
        <p className="font-['Inter'] text-[10px] leading-[100%] font-bold tracking-[0%] text-[#9AA4B7]">
          WORKSPACE
        </p>
      </div>

      <nav className="ml-[21px] mt-[22px] flex flex-col gap-2 max-[1199px]:m-0 max-[1199px]:flex-row max-[1199px]:items-center max-[1199px]:justify-around max-[1199px]:gap-0 max-[1199px]:px-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex h-[47px] w-[202px] items-center gap-3 rounded-lg px-3 transition-colors max-[1199px]:h-[72px] max-[1199px]:w-auto max-[1199px]:flex-1 max-[1199px]:flex-col max-[1199px]:justify-center max-[1199px]:gap-[5px] max-[1199px]:rounded-none max-[1199px]:px-0 ${
                isActive
                  ? "bg-[#F0EEFF] text-[#6457F5] max-[1199px]:bg-transparent"
                  : "bg-transparent text-[#64748B] hover:bg-[#F4F3FF] hover:text-[#6257E8]"
              }`}
            >
              <Icon size={20} />
              <span className="font-['Inter'] text-[14px] leading-none font-normal max-[1199px]:text-[10px] max-[1199px]:font-medium">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
