import Link from "next/link";
import React from "react";
import PostCard from "../components/Intro/Card";
import { Mockdata } from "@/model/PostCard";
import Navigation from "../components/Navigation";
import { PiCubeFocus } from "react-icons/pi";
import Image from "next/image";
import post1 from "/public/detailpost1.png";
import post2 from "/public/detailpost2.png";

export default function Introduction() {
  return (
    <div className="min-h-screen pb-8">
      <Navigation title="MeAR紹介" />
      <main className="flex flex-col max-w-4xl w-full mx-auto px-8 pt-8 md:text-center">
        {/* 冒頭 */}
        <h1 className="text-xl font-bold text-center">
          3Dモデルの体験による
          <br />
          フィードバックのお願い
        </h1>
        <p className="py-4 text-center">
          3Dモデルで表示することにより、
          <br />
          視覚的にどのようなメリットがあるのか。
          <br />
          ぜひ皆様の体験と意見をお聞かせください！
        </p>
        <p className=" text-red-400">(注意)</p>
        <p className="pyー1 text-xs">
          本アプリのAR表示機能は、機能の性質上、
          <span className="text-red-400">モバイル端末</span>でのみ動作します
          <br />
          そのため、PCからアクセスされている場合はお手数ですが
          <br />
          <span className="font-bold ">
            スマートフォンからアクセスしていただけると幸いです。
          </span>
        </p>

        {/* 手順 */}
        <h2 className="text-xl pt-8 font-bold">〜手順〜</h2>
        {/* Postカード */}
        <div className="flex flex-col items-center justify-center">
          <p className="pb-4">(投稿カード)</p>
          <Link href="/intro/post/" className="">
            <PostCard {...Mockdata} />
          </Link>
        </div>
        {/* 手順解説 */}
        <ol className="py-8">
          <li className="text-lg font-bold">
            1. 上記の投稿カードをタップし、
            <br />
            <span className="mr-4"></span>
            投稿詳細画面に遷移
          </li>
          <p className="pt-1 text-sm">
            投稿詳細画面に移動すると、初めはメニュー画像が表示されています。
          </p>
          <div className=" py-8 flex flex-col justify-center items-center">
            <p className=" font-normal">(投稿詳細画面)</p>
            <Image
              src={post1}
              alt="menu"
              width={300}
              height={300}
              className="shadow-xl"
            />
          </div>

          <li className="text-lg pt-4 font-bold">
            2. 画像下にある「3Dでみる」をタップ
            <p className="pt-1 text-sm font-light">
              ボタンを押すことで、画像と3Dモデルを切り替えることができます。
            </p>
            <div className=" py-8 flex flex-col justify-center items-center">
              <p className=" font-normal">(3Dモデル表示後)</p>
              <Image
                src={post2}
                alt="menu"
                width={300}
                height={300}
                className="shadow-xl"
              />
            </div>
            <p className="pt-4 text-center font-bold text-red-500">
              3Dモデルの右下にあるcubeアイコン
              <span className="flex justify-center text-center text-black">
                <PiCubeFocus />
              </span>
              をタップすると、 AR画面へ移動します
            </p>
          </li>
        </ol>

        {/* フィードバック提出方法 */}
        <h2 className="text-xl pt-8 font-bold text-center">
          〜フィードバックの提出方法〜
        </h2>
        <p className="py-4">
          以下のリンクからGoogleフォームにアクセスし、ご意見をお聞かせください。
        </p>
        <div className="flex justify-center">
          <Link
            href="https://forms.gle/4zmc8JYsm2LaCU1Y9"
            className="text-xl text-blue-300"
          >
            -Googleフォーム-
          </Link>
        </div>
        <div>
          <p className="py-4">ご協力をお願いいたします!!</p>
        </div>
      </main>
    </div>
  );
}
