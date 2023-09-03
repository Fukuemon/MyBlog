import Header from "./components/Mypage/Header";
import Introduction from "./components/Mypage/Introduction";
import Skill from "./components/Mypage/Skill";

export default function Home() {
  return (
    <main className="text-primary">
      <Header />
      <Introduction />
      <Skill />
    </main>
  );
}
