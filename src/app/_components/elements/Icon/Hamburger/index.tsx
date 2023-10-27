'use client'
import React, { FC } from 'react'
import { FaBars } from 'react-icons/fa'
import useStore from '@/store/store'
import SlideBar from '../../../Common/SlideBar'

type Props = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

// プレゼンテーションコンポーネント
const IconButton: FC<Props> = ({ onOpen }) => {
  return (
    <button onClick={onOpen}>
      <FaBars className="text-3xl text-gray-500 md:text-4xl" />
    </button>
  )
}

// コンテナコンポーネント
const Hamburger = () => {
  const { isDrawerOpen, DrawerOpen, DrawerClose } = useStore()

  return (
    <div>
      <IconButton isOpen={isDrawerOpen} onOpen={DrawerOpen} onClose={DrawerClose} />
      {isDrawerOpen && <SlideBar />}
    </div>
  )
}

export default Hamburger
