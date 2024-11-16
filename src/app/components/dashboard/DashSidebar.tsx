"use client";

import React from "react";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faUser,
  faCircleXmark,
  IconDefinition,
  faCalendarAlt,
  faChalkboardTeacher,
  faUserPlus,
  faCalendarCheck,
  faListAlt,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { ENUM_USER_ROLE } from "@/app/types/Iuser";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { usePathname } from "next/navigation";
import { setToggle } from "@/app/redux/features/toggle/toggleSlice";

interface SidebarItem {
  title: string;
  url: string;
  icon: IconDefinition;
  count?: number; // Optional count property
}
type SidebarProps = {
  role: ENUM_USER_ROLE;
};

export default function DashSideBar({ role }: SidebarProps) {
  const { toggle } = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();
  console.log(toggle);
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  const commonSidebarItems: SidebarItem[] = [
    { title: "Profile", url: "/dashboard/profile", icon: faUser },
  ];

  // Define role-specific sidebar items
  const roleSpecificSidebarItems: Partial<
    Record<ENUM_USER_ROLE, SidebarItem[]>
  > = {
    [ENUM_USER_ROLE.TRAINEE]: [
      {
        title: "Booking Class",
        url: "/dashboard/trainee/booking",
        icon: faCalendarCheck,
      },
      {
        title: "View Class",
        url: "/dashboard/trainee/viewClass",
        icon: faListAlt,
      },
    ],
    [ENUM_USER_ROLE.ADMIN]: [
      {
        title: "Create Trainer",
        url: "/dashboard/admin/createTrainer",
        icon: faUserPlus,
      },
      {
        title: "Manage Trainers",
        url: "/dashboard/admin/trainers",
        icon: faCalendarAlt,
      },
      {
        title: "Class Schedule",
        url: "/dashboard/admin/classSchedule",
        icon: faCalendarAlt,
      },

      {
        title: "Create  Class Schedule",
        url: "/dashboard/admin/createSchedule",
        icon: faCalendarAlt,
      },
    ],
    [ENUM_USER_ROLE.TRAINER]: [
      {
        title: "Class Schedule",
        url: "/dashboard/trainer/classes",
        icon: faClipboardList,
      },
      {
        title: "Manage Classes",
        url: "/dashboard/trainer/manageClasses",
        icon: faChalkboardTeacher,
      },
    ],
  };

  const allSidebarItems: SidebarItem[] = [
    ...commonSidebarItems,
    ...(roleSpecificSidebarItems[role] || []),
  ];

  return (
    <div
      className={`${
        toggle ? "w-80 md:w-24" : "md:w-80 text-[#31363F] hidden lg:block"
      } border-2 md:relative absolute bg-white`}
    >
      <div className="flex justify-end p-5 md:hidden">
        <button>
          <FontAwesomeIcon
            onClick={() => dispatch(setToggle())}
            style={{ width: "1.5em", height: "2em" }}
            icon={faCircleXmark}
          />
        </button>
      </div>

      <div className="mt-5 2xl:text-[18px] xl:text-[15px] lg:text-[12px] text-[8px] grid gap-y-5">
        {allSidebarItems.map(({ title, url, icon }) => (
          <Link
            className={`${
              isActive(url) ? "bg-[#FF914F] " : ""
            } mx-auto w-[90%] hover:bg-[#FF914F] flex h-16 px-2 ${
              toggle ? "md:justify-center justify-between" : "justify-between"
            } items-center`}
            key={url}
            href={url}
          >
            <div className="relative flex gap-x-5 items-center">
              <FontAwesomeIcon
                style={{ width: "1.5em", height: "1.5em" }}
                icon={icon}
              />

              <span
                className={`${
                  toggle ? "md:hidden" : "block"
                } capitalize font-bold whitespace-nowrap`}
              >
                {title}
              </span>
            </div>
            <FontAwesomeIcon
              style={{ width: "1.5em", height: "1.5em" }}
              className={`${toggle ? "md:hidden" : "block"}`}
              icon={faCaretRight}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
