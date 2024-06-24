import logo from "../assets/images/logo-quotable.png";
import Button from "./button";
import Input from "./input";

const Header = ({btn}: {btn: any}) => {
  return (
    <>
      <header className="bg-back2 py-6 px-20 grid grid-cols-header grid-rows-1 gap-x-96">
        <div>
          <img width="120" src={logo} alt="Logo" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Input button={btn} className={"w-1/2"}/>
          <Button href={"/"}>Home</Button>
          <Button href={"/random"}>Random Qoute</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
