import Link from 'next/link'

const Introduction = () => {
  return (
    <section className="text-primary">
      <div className="p-4 ">
        <h3 className="font-burtons text-2xl md:text-3xl  ">What I want to introduce</h3>
        <h4 className=" py-1 text-xl md:text-2xl ">〜3DスキャンアプリとXR〜</h4>
        <p className="py-2">私は現在、3Dモデルを活用したアプリの開発を行っています。</p>
        <p>近年では、スマホを使って簡単に3Dスキャンができる時代になりました。</p>
        <p className="py-1">
          今年6月に開かれた「WWDC2023」で、アップルがXRデバイスを発表したり、
          <br />
          iOS17の機能として、進化した3Dスキャンの機能についての発表があったりと、XR業界に対する期待が高まっています。
        </p>
        <p className="py-1">
          技術が進歩し、ARやMRがより身近なものになれば、画像を投稿するのと同じ感覚で、3Dを投稿する。といったことが起きるんじゃないかな〜
          と楽しみにしてます。
        </p>
        <p className="py-4">興味のある方は、ぜひ以下のリンクからご覧ください。</p>
        <div className="flex flex-col justify-center">
          <span className="pr-3 text-lg font-bold">ObjectCapture紹介</span>
          <Link href="https://developer.apple.com/videos/play/wwdc2023/10191/">
            <p className="text-blue-500 underline">Meet Object Capture for iOS- WWDC23 -videos</p>
          </Link>
          <span className="pr-3 text-lg font-bold">おすすめ3Dスキャンアプリ(Scaniverse)</span>
          <Link href="https://scaniverse.com/">
            <p className="text-blue-500 underline">Scaniverse</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Introduction
