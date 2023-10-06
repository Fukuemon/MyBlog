import React, { FC } from 'react'
import Link from 'next/link'
import { Blog } from '@/libs/microcms'

interface Props {
  blog: Blog
  time: string
}

const ContentListItem: FC<Props> = (props) => {
  return (
    <div className="border p-8 font-burtons  ">
      <li key={props.blog.id}>
        <Link href={`/static/${props.blog.id}`}>
          <div className="font-source-code-pro text-xl text-text">タイトル：{props.blog.title}</div>
        </Link>
        <p>投稿日時：{props.time}</p>
      </li>
    </div>
  )
}

export default ContentListItem
