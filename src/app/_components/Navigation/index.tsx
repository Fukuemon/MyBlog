import Hamburger from "../elements/Icon/Hamburger";
import { FC } from "react";

type Props = {
  title: string;
};
const Navigation: FC<Props> = (props) => {
  return (
    <header>
      <nav className="p-5 bg-main shadow flex items-center justify-between">
        <h1 className="text-primary text-3xl cursor-pointer font-burtons">
          {props.title}
        </h1>
        <div className="absolute right-8 items-center justify-center">
          <Hamburger />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
