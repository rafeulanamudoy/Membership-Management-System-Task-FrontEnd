"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faRightFromBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { UserPayload } from "../types/Iuser";
import { useRemoveAccount } from "../hooks/user";
interface HeaderProps {
  user: UserPayload | null;
}
const Header = React.memo(({ user }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handlelogout = useRemoveAccount();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={` w-full  grid md:flex md:justify-evenly   items-center 2xl:text-[20px]  xl:text-md text-[10px] uppercase bg-black text-white`}
    >
      <nav
        className={`${
          isMobileMenuOpen ? `md:flex` : `hidden`
        } md:flex  mx-5 md:mx-0 xl:gap-x-16  font-semibold `}
      >
        {[["home", "/"]].map(([title, url]) => (
          <Link className="" key={url} href={url}>
            {title}
          </Link>
        ))}
      </nav>
      <div className="order-first md:order-none my-5 mx-5  md:mx-0 md:my-0  ">
        <div className="md:hidden">
          <button
            className="text-xl font-bold text-white"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon className="" icon={faBars} />
          </button>
        </div>
      </div>

      <nav
        className={`${
          isMobileMenuOpen ? `md:flex` : `hidden`
        } md:flex gap-x-5 mx-5 md:mx-0 mt-5 md:mt-0 items-center font-semibold`}
      >
        {user?.email ? (
          <div className="md:flex gap-x-5 h-16 items-center mb-5 md:mb-0">
            <button
              onClick={handlelogout}
              className="uppercase block my-5 md:my-0"
            >
              sign out
            </button>
          </div>
        ) : (
          <div
            className={`${
              isMobileMenuOpen ? `md:flex` : `hidden`
            } md:flex gap-x-5 xl:gap-x-16 h-16 items-center `}
          >
            {[
              ["sign In", "/signIn#signIn", faRightFromBracket],
              ["sign up", "/signUp#signUp", faUserPlus],
            ].map(([title, url, icon], index) => (
              <div key={index} className="authButton  md:mb-0 mb-5">
                <div>
                  <Link
                    href={url as string}
                    className="flex items-center gap-x-3 font-semibold"
                  >
                    <FontAwesomeIcon
                      style={{ width: "1.1em", height: "1.1em" }}
                      icon={icon as IconProp}
                      className="md:block hidden"
                    />
                    <div>{title as string}</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
