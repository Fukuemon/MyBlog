import React, { FC } from "react";
import parse from "html-react-parser";
import { Blog } from "@/libs/microcms";

type Props = {
  post: Blog;
};

const ContentDetail: FC<Props> = (props) => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <div>{parse(props.post.content)}</div>
    </div>
  );
};

export default ContentDetail;
