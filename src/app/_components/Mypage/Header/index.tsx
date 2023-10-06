import Image from 'next/image'
import Link from 'next/link'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { SiZenn } from 'react-icons/si'
import profile from '../../../../../public/myprofile.png'

const Header = () => {
  return (
    <section className="p-4">
      <div className="text-primary pb-4 text-center">
        <h2 className="pb-4 font-burtons text-5xl font-medium text-black">Yuya Fukuura</h2>
        <h3 className="p-1 text-lg">(出生)</h3>
        <p>2004/07/09</p>
        <p>兵庫県 出身</p>
        <h3 className="p-1 text-lg">(学歴)</h3>
        <p>
          神戸電子専門学校 <br />
          AIシステム開発学科(1年)
        </p>
        {/* <h3 className="text-lg p-1">(趣味)</h3>
        <p>
          プログラミング・筋トレ・ゲーム <br />
        </p> */}
      </div>
      <div className="text-primary flex justify-center gap-16 py-5 text-5xl">
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
      <div className="relative mx-auto h-80 w-80 rounded-full bg-gradient-to-b from-yellow-500 ">
        <Image src={profile} alt="myprofile" objectFit="cover" />
      </div>
    </section>
  )
}

export default Header
