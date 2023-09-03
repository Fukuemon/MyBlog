"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import useStore from "@/store/store";
import SlideBar from "../../SlideBar";

const Hamburger = () => {
  const { isDrawerOpen, DrawerOpen, DrawerClose } = useStore();
  return (
    <div>
      <span className="md:hidden block">
        {isDrawerOpen ? ( // isDrawerOpenの値によってアイコンの表示を切り替える
          <button onClick={DrawerClose}>
            <XMarkIcon className="h-8 w-8 text-gray-500" />
          </button>
        ) : (
          <button onClick={DrawerOpen}>
            <Bars3Icon className="h-8 w-8 text-gray-500 " />
          </button>
        )}
      </span>
      {isDrawerOpen ? <SlideBar /> : null}
    </div>
  );
};

export default Hamburger;
