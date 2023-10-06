import { FC } from 'react'
import Hamburger from '../elements/Icon/Hamburger'

type Props = {
  title: string
}
const Navigation: FC<Props> = (props) => {
  return (
    <header>
      <nav className="flex items-center justify-between bg-main p-5 shadow">
        <h1 className="text-primary cursor-pointer font-burtons text-3xl">{props.title}</h1>
        <div className="absolute right-8 items-center justify-center">
          <Hamburger />
        </div>
      </nav>
    </header>
  )
}

export default Navigation
