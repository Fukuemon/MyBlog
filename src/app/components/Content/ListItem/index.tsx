import React, { FC } from "react";
import { Blog } from "@/libs/microcms";
import Link from "next/link";

interface Props {
  blog: Blog;
  time: string;
}

const ContentListItem: FC<Props> = (props) => {
  return (
    <li key={props.blog.id}>
      <Link href={`/static/${props.blog.id}`}>
        <div className="text-xl font-medium text-text">{props.blog.title}</div>
      </Link>
      <p>投稿日時：{props.time}</p>
    </li>
  );
};

export default ContentListItem;
