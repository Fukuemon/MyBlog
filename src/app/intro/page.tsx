import Link from "next/link";
import React from "react";
import PostCard from "../components/Intro/Card";
import { Mockdata } from "@/model/PostCard";
import Navigation from "../components/Navigation";

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
          本アプリのAR表示機能は、機能の性質上、モバイル端末でのみ動作します
          <br />
          そのため、PCからアクセスされている場合はお手数ですが
          <br />
          スマートフォンからアクセスしていただけると幸いです。
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
          <li className="text-lg">
            1. 上記の投稿カードをタップし、
            <br />
            <span className="mr-4"></span>
            投稿詳細画面に遷移
          </li>
          <p className="pt-1 text-sm">
            投稿詳細画面に遷移すると、初めはメニュー画像が表示されています。
          </p>
          <li className="text-lg pt-4">
            2. 画像下にある「3Dでみる」をタップ
            <p className="pt-1 text-sm">
              ボタンを押すことで、画像と3Dモデルを切り替えることができます。
            </p>
            <p className="pt-4 text-center font-bold">
              3Dモデルの右下にあるcubeアイコンをタップすると、
              AR画面へ遷移します
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
