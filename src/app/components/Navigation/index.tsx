import Link from "next/link";
import Hamburger from "../Icon/Hamburger";

const Navigation = () => {
  return (
    <header className="sticky z-10 bg-gray-50 border-b py-6">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-14">
        <div className="">
          <div className="text-lg font-bold">ふくえもんの庭</div>
        </div>
        <div className="space-x-12 hidden md:flex items-center">
          <Link href="/" className="hover:text-selected-text">
            Topへ
          </Link>
          <Link href="/static" className="font-bold hover:text-selected-text">
            記事一覧
          </Link>
        </div>
        <div className="md:hidden">
          <Hamburger />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
