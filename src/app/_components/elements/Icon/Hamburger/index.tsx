"use client";
import React from "react";
import useStore from "@/store/store";
import SlideBar from "../../../SlideBar";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Hamburger = () => {
  const { isDrawerOpen, DrawerOpen, DrawerClose } = useStore();
  return (
    <div>
      {isDrawerOpen ? ( // isDrawerOpenの値によってアイコンの表示を切り替える
        <button onClick={DrawerClose}>
          <AiOutlineClose className="text-3xl text-gray-500 md:text-4xl" />
        </button>
      ) : (
        <button onClick={DrawerOpen}>
          <FaBars className="text-3xl text-gray-500 md:text-4xl" />
        </button>
      )}
      {isDrawerOpen && <SlideBar />}
    </div>
  );
};

export default Hamburger;
