import Header from "./_components/Mypage/Header";
import Introduction from "./_components/Mypage/Introduction";
import Skill from "./_components/Mypage/Skill";
import Navigation from "./_components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation title="MyPage" />
      <main className="flex-1 max-w-4xl w-full mx-auto px-8 pt-8">
        <Header />
        <Skill />
        <Introduction />
      </main>
    </div>
  );
}
