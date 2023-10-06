'use client'
import React, { FC } from 'react'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import useStore from '@/store/store'

const SlideBar = () => {
  const onClose = useStore((state) => state.DrawerClose)

  return (
    <div className="group absolute left-0 top-0 z-50 -m-5 h-screen w-full bg-black bg-opacity-50 lg:block">
      <div className="fixed right-0 h-screen w-3/5 max-w-lg bg-main">
        <div className="flex flex-row-reverse py-5 pr-8">
          <AiOutlineClose className="text-3xl text-gray-500 md:text-4xl" onClick={onClose} />
        </div>
        <ul className="p-0">
          <MenuItem href="/" label="Top" onClose={onClose} />
          <MenuItem href="/static" label="記事一覧" onClose={onClose} />
          <MenuItem href="/intro" label="MeAR紹介" onClose={onClose} />
        </ul>
      </div>
    </div>
  )
}

type Props = {
  href: string
  label: string
  onClose: () => void
}

export const MenuItem: FC<Props> = ({ href, label, onClose }) => {
  return (
    <li onClick={onClose}>
      <Link href={href} className="flex h-24 w-full cursor-pointer items-center justify-center hover:bg-slate-400">
        <h3 className="text-2xl font-bold">{label}</h3>
      </Link>
    </li>
  )
}

export default SlideBar
