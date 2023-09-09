import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import profile from "../../../../../public/myprofile.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="px-4 py-4">
      <div className="text-primary text-center pb-4  ">
        <h2 className="pb-4 text-5xl text-black font-burtons font-medium">
          Yuya Fukuura
        </h2>
        <h3 className="text-lg p-1">(出生)</h3>
        <p>2004/07/09</p>
        <p>兵庫県 出身</p>
        <h3 className="text-lg p-1">(学歴)</h3>
        <p>
          神戸電子専門学校 <br />
          AIシステム開発学科(1年)
        </p>
        {/* <h3 className="text-lg p-1">(趣味)</h3>
        <p>
          プログラミング・筋トレ・ゲーム <br />
        </p> */}
      </div>
      <div className="text-5xl flex justify-center gap-16 py-5 text-primary">
        <Link href="https://github.com/Fukuemon">
          <FaGithub />
        </Link>

        <Link href="https://twitter.com/fukuemon362929">
          <AiFillTwitterCircle />
        </Link>
        <Link href="">
          <SiZenn />
        </Link>
      </div>
      <div className="relative bg-gradient-to-b from-yellow-500 rounded-full w-80 h-80 mx-auto ">
        <Image src={profile} alt="myprofile" objectFit="cover" />
      </div>
    </section>
  );
};

export default Header;
