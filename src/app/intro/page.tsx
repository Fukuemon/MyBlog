import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import PostCard from './_components/Card'
import { Mockdata } from '@/model/PostCard'
import Navigation from '../_components/Common/Navigation'
import { PiCubeFocus } from 'react-icons/pi'
import post1 from '/public/detailpost1.png'
import post2 from '/public/detailpost2.png'

export default function IntroductionPage() {
  return (
    <div className="min-h-screen pb-8">
      <Navigation title="MeAR紹介" />
      <MainContent />
    </div>
  )
}

function MainContent() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col px-8 pt-8 md:text-center">
      <IntroSection />
      <InstructionsSection />
      <FeedbackSection />
    </main>
  )
}

function IntroSection() {
  return (
    <>
      <h1 className="text-center text-xl font-bold">
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
      <p className="text-red-400">(注意)</p>
      <p className="py-1 text-xs">
        本アプリのAR表示機能は、機能の性質上、
        <span className="text-red-400">モバイル端末</span>でのみ動作します
        <br />
        そのため、PCからアクセスされている場合はお手数ですが
        <br />
        <span className="font-bold ">スマートフォンからアクセスしていただけると幸いです。</span>
      </p>
    </>
  )
}

function InstructionsSection() {
  return (
    <>
      <h2 className="pt-8 text-xl font-bold">〜手順〜</h2>
      <PostCardInstructions />
      <ol className="py-8">
        <li className="text-lg font-bold">
          1. 上記の投稿カードをタップし、
          <br />
          投稿詳細画面に遷移
        </li>
        <DetailInstructions src={post1.src} caption="(投稿詳細画面)" />
        <li className="pt-4 text-lg font-bold">
          2. 画像下にある「3Dでみる」をタップ
          <p className="pt-1 text-sm font-light">ボタンを押すことで、画像と3Dモデルを切り替えることができます。</p>
          <DetailInstructions src={post2.src} caption="(3Dモデル表示後)" />
          <p className="pt-4 text-center font-bold text-red-500">
            3Dモデルの右下にあるcubeアイコン
            <span className="flex justify-center text-center text-black">
              <PiCubeFocus />
            </span>
            をタップすると、 AR画面へ移動します
          </p>
        </li>
      </ol>
    </>
  )
}

function PostCardInstructions() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="pb-4">(投稿カード)</p>
      <Link href="/intro/post/">
        <PostCard {...Mockdata} />
      </Link>
    </div>
  )
}

type DetailInstructionsProps = {
  src: string
  caption: string
}

function DetailInstructions({ src, caption }: DetailInstructionsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <p className="font-normal">{caption}</p>
      <Image src={src} alt="menu" width={300} height={300} className="shadow-xl" />
    </div>
  )
}

function FeedbackSection() {
  return (
    <>
      <h2 className="pt-8 text-center text-xl font-bold">〜フィードバックの提出方法〜</h2>
      <p className="py-4">以下のリンクからGoogleフォームにアクセスし、ご意見をお聞かせください。</p>
      <div className="flex justify-center">
        <Link href="https://forms.gle/4zmc8JYsm2LaCU1Y9" className="text-xl text-blue-300">
          -Googleフォーム-
        </Link>
      </div>
      <div>
        <p className="py-4">ご協力をお願いいたします!!</p>
      </div>
    </>
  )
}
