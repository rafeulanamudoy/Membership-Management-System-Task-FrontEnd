"use client";
import { useRemoveAccount } from "@/app/hooks/user";
import { setToggle } from "@/app/redux/features/toggle/toggleSlice";
import { useAppDispatch } from "@/app/redux/hooks";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function DashNavBar() {
  const handleLogOut = useRemoveAccount();
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white 2xl:text-[18px] xl:text-[15px] lg:text-[12px] text-[8px]  px-5 flex items-center justify-between h-36 border-b-2">
      <div>
        <button onClick={() => dispatch(setToggle())}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="flex font-bold text-[#31363F] items-center gap-x-5 xl:gap-x-18 capitalize">
        <div>
          <Link href="/">home</Link>
        </div>
        <div>
          <button className="capitalize" onClick={handleLogOut}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
}
