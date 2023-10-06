import Image from "next/image";
import user from "/public/myprofile.png";
import { FC } from "react";
import { Author, tPostCard } from "@/model/PostCard";
type Props = {
  author: Author;
  post: tPostCard;
};

export const CardHeader: FC<Props> = (props) => {
  return (
    <div className="card-header">
      {/* 左側：ユーザー紹鴎*/}
      <div className="flex items-center">
        <Image
          src={user}
          className="rounded-full "
          alt="ユーザーアイコン"
          width={40}
          height={40}
        />
        <h2 className="font-bold">{props.author.nickName}</h2>
      </div>

      {/* 日付 */}
      <h2 className="font-bold pr-4 text-xl ">{props.post.createdAt}</h2>
    </div>
  );
};
