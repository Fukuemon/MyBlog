import React, { FC } from "react";
import { Blog } from "@/libs/microcms";
import Link from "next/link";

interface Props {
  blog: Blog;
  time: string;
}

const ContentListItem: FC<Props> = (props) => {
  return (
    <div className="font-burtons border p-8  ">
      <li key={props.blog.id}>
        <Link href={`/static/${props.blog.id}`}>
          <div className="text-xl font-source-code-pro text-text">
            タイトル：{props.blog.title}
          </div>
        </Link>
        <p>投稿日時：{props.time}</p>
      </li>
    </div>
  );
};

export default ContentListItem;
