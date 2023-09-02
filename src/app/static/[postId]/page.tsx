//投稿詳細ページ

import ContentDetail from "@/app/components/Content/Detail";
import { getDetail, getList } from "@/libs/microcms";
import { notFound } from "next/navigation";

//投稿詳細のパラメーターを取得する
export async function generateStaticParams() {
  //静的生成のためのパラメータを返す
  const { contents } = await getList();
  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

//投稿詳細ページ
export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);
  if (!post) {
    //投稿がない場合
    notFound();
  }

  return (
    <ContentDetail post={post} /> //コンテンツを渡す
  );
}
