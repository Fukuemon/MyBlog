// libs.microcms.ts

import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

// ブログの方
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

// APIKEYの確認
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("サービス名が設定されていません");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("APIキーが設定されていません");
}

//API取得用クライアントの作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログの取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });

  //データの取得が目視しやすいよう遅延させる
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  //データの取得が目視しやすいよう遅延させる
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};
