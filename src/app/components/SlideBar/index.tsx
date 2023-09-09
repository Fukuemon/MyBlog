import useStore from "@/store/store";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const SlideBar = () => {
  const onClose = useStore((state) => state.DrawerClose);
  return (
    <div className="absolute bg-black bg-opacity-50  w-3/5 h-screen z-50 top-0 left-0  lg:block  group">
      <div className="absolute w-4/5 max-w-4/5 h-screen right-0 ">
        <div className="fixed bg-main w-3/5 max-w-lg h-screen right-0  ">
          <div className="flex flex-row-reverse my-5 mx-5 ">
            <XMarkIcon
              className="h-8 w-8 text-gray-500 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <ul className="p-0">
            <li onClick={onClose}>
              <Link
                href="/"
                className="w-full  h-24  justify-center  flex items-center  cursor-pointe hover:bg-slate-400"
              >
                <h3 className="text-2xl font-bold">Top</h3>
              </Link>
            </li>
            <li onClick={onClose}>
              <Link
                href="/static"
                onClick={onClose}
                className="w-full  h-24   py-0 justify-center  flex items-center  cursor-pointe"
              >
                <h3 className="text-2xl font-bold">記事一覧</h3>
              </Link>
            </li>
            <li onClick={onClose}>
              <Link
                href="/intro"
                onClick={onClose}
                className="w-full  h-24   py-0 justify-center  flex items-center  cursor-pointe"
              >
                <h3 className="text-2xl font-bold">MeAR紹介</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
