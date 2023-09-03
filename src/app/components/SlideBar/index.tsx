import useStore from "@/store/store";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const SlideBar = () => {
  const onClose = useStore((state) => state.DrawerClose);
  return (
    <div className="fixed bg-black bg-opacity-50  w-3/5 h-screen z-50 top-0 left-0 lg:block">
      <div className="fixed w-4/5 max-w-4/5 h-screen right-0">
        <div className="fixed bg-gray-50 w-3/5 max-w-lg h-screen right-0">
          <div className="flex flex-row-reverse my-5 mx-5">
            <XMarkIcon className="h-8 w-8 text-gray-500" onClick={onClose} />
          </div>
          <ul className="p-0">
            <li onClick={onClose}>
              <Link
                href="/"
                className="w-full  h-24  mt-20  py-0 justify-center bg-white flex items-center border cursor-pointe"
              >
                Top
              </Link>
            </li>
            <li onClick={onClose}>
              <Link
                href="/static"
                onClick={onClose}
                className="w-full  h-24   py-0 justify-center bg-white flex items-center border cursor-pointe"
              >
                記事一覧
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
