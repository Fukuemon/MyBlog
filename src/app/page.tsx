import Header from './_components/Mypage/Header'
import Introduction from './_components/Mypage/Introduction'
import Skill from './_components/Mypage/Skill'
import Navigation from './_components/Common/Navigation'

export default function Home() {
  return (
    <div>
      <Navigation title="MyPage" />
      <main className="mx-auto w-full max-w-4xl flex-1 px-8 pt-8">
        <Header />
        <Skill />
        <Introduction />
      </main>
    </div>
  )
}
