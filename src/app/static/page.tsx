import { getList } from "@/libs/microcms";
import ContentListItem from "../components/Content/ListItem";
import Navigation from "../components/Navigation";

export default async function StaticPage() {
  const { contents } = await getList();
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return <div>記事がありません</div>;
  }

  return (
    <div>
      <Navigation title="PostPage" />
      <div className="min-h-screen ">
        <ul className="flex flex-col space-y-7 ">
          {contents.map((post, index) => {
            // 投稿の情報とindexを追加
            return (
              <ContentListItem key={index} blog={post} time={time} /> //コンテンツとkeyを渡す
            );
          })}
        </ul>
      </div>
    </div>
  );
}
