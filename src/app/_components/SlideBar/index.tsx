"use client";
import useStore from "@/store/store";
import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SlideBar = () => {
  const onClose = useStore((state) => state.DrawerClose);

  return (
    <div className="absolute -m-5 bg-black bg-opacity-50 w-full h-screen z-50 top-0 left-0 lg:block group">
      <div className="fixed bg-main w-3/5 max-w-lg h-screen right-0">
        <div className="flex flex-row-reverse pr-8 py-5">
          <AiOutlineClose
            className="text-3xl text-gray-500 md:text-4xl"
            onClick={onClose}
          />
        </div>
        <ul className="p-0">
          <MenuItem href="/" label="Top" onClose={onClose} />
          <MenuItem href="/static" label="記事一覧" onClose={onClose} />
          <MenuItem href="/intro" label="MeAR紹介" onClose={onClose} />
        </ul>
      </div>
    </div>
  );
};

type Props = {
  href: string;
  label: string;
  onClose: () => void;
};

export const MenuItem: FC<Props> = ({ href, label, onClose }) => {
  return (
    <li onClick={onClose}>
      <Link
        href={href}
        className="w-full h-24 flex justify-center items-center cursor-pointer hover:bg-slate-400"
      >
        <h3 className="text-2xl font-bold">{label}</h3>
      </Link>
    </li>
  );
};

export default SlideBar;
