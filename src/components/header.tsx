import { Link } from "react-router-dom";
import logo from "../assets/images/logo-quotable.png";
import Button from "./button";
import Input from "./input";

const Header = ({btn , link , innerText }: {btn: any , link: string , innerText: string}) => {
  return (
    <>
      <header className="bg-back2 py-6 px-20 flex flex-row justify-between">
        <Link to={"/"}>
          <img width="120" src={logo} alt="Logo" />
        </Link>
        <div className="w-1/2 flex flex-row items-center justify-between">
          <Input button={btn} className={"w-4/6"}/>
          <Button href={link}>{innerText}</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
