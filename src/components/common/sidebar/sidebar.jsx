import React, { useState } from "react";

import Logo from "../../../assets/icons/logo-svg.svg";
import userImg from "../../../assets/images/leftsidebar/userImg.png";
import Home from "../../../assets/icons/leftsidebar/House.svg";
import Home_light from "../../../assets/icons/leftsidebar/House-white.svg";
import Menu from "../../../assets/icons/leftsidebar/menu-board.svg";
import Menu_light from "../../../assets/icons/leftsidebar/menu-board-white.svg";
import Dinner_Table from "../../../assets/icons/leftsidebar/dinner-table.svg";
import Dinner_Table_light from "../../../assets/icons/leftsidebar/dinner-table_light.svg";
import Order from "../../../assets/icons/leftsidebar/task-square.svg";
import Order_light from "../../../assets/icons/leftsidebar/task-square-white.svg";
import Shedule from "../../../assets/icons/leftsidebar/calendar-tick.svg";
import Shedule_light from "../../../assets/icons/leftsidebar/calendar-tick-white.svg";
import Staff from "../../../assets/icons/leftsidebar/UsersThree.svg";
import Staff_light from "../../../assets/icons/leftsidebar/UsersThree-white.svg";
import Setting from "../../../assets/icons/leftsidebar/GearSix.svg";
import Setting_light from "../../../assets/icons/leftsidebar/GearSix-white.svg";
import Logout from "../../../assets/icons/leftsidebar/logout.svg";
import Logout_light from "../../../assets/icons/leftsidebar/logout-white.svg";
import CircleIcons from "../CircleIcons/circleIcons";

const navItems = [
  { icon: Home, iconHover: Home_light, label: "Home", active: true },
  {
    icon: Dinner_Table,
    iconHover: Dinner_Table_light,
    label: "Table",
  },
  { icon: Menu, iconHover: Menu_light, label: "Menu" },
  { icon: Order, iconHover: Order_light, label: "Orders" },
  {
    icon: Shedule,
    iconHover: Shedule_light,
    label: "Schedule",
  },
  {
    icon: Staff,
    iconHover: Staff_light,
    label: "Staff Data",
  },
  {
    icon: Setting,
    iconHover: Setting_light,
    label: "Settings",
  },
  { icon: Logout, iconHover: Logout_light, label: "Logout" },
];

const Siderbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      <div className="left-sidebar w-full h-screen rounded-r-3xl px-6">
        <div className="pt-6 flex justify-center items-center">
          <img src={Logo} className="h-8 w-8" alt="Loading" />
          <h1 className="lg:text-xl md:text-base mx-2 right-sidebar-dropshadow montserrat-alternates-semibold cashier-main-text-color">
            FOOD FUSION
          </h1>
        </div>
        <div className="grid mt-7 text-center justify-center">
          <div className="text-center flex justify-center">
            <img src={userImg} className="rounded-full" alt="Loading" />
          </div>
          <h5 className="text-sm font-bold mt-2">Shumaila Khan</h5>
          <h6 className="text-sm font-bold ">Cashier</h6>
        </div>
        
        <nav className="my-3 ml-2 h-2/3 overflow-scroll hidden-scroll flex justify-center ">
          <ul className="space-y-4 w-56">
            {navItems.map((item) => (
              <li
                key={item.label}
                onMouseOver={() => setHoveredItem(item?.label)}
                onMouseOut={() => setHoveredItem(null)}
                className="rounded-full sidebar-li"
              >
                <a className="w-full cursor-pointer flex items-center rounded-full text-left transition-all  hover:text-white text-gray-600">
                  {/* <span className="w-9 h-9 bg-white/60 rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                        stroke="#d1d5db"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span> */}
                  <CircleIcons
                    icon={
                      hoveredItem === item?.label ? item?.iconHover : item?.icon
                    }
                  />
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Siderbar;
