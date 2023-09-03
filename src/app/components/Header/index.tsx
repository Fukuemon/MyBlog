import Link from "next/link";
import Hamburger from "../Icon/Hamburger";
const Header = () => {
  return (
    <nav className="p-5 bg-main shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold cursor-pointer inline">
          ふくえもんの庭
        </span>
        <Hamburger />
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <Link
          href="/"
          className="font-bold mx-4 my-6 md:my-0 hover:text-selected-text"
        >
          Topへ
        </Link>
        <Link
          href="/static"
          className="mx-4 my-6 md:my-0 font-bold hover:text-selected-text"
        >
          記事一覧
        </Link>
      </ul>
    </nav>
  );
};

export default Header;