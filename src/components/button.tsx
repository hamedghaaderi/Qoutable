import { Link } from "react-router-dom";
interface IButton {
  children: string;
  href: string;
}

const Button = ({ children, href }: IButton) => {
  return (
    <>
      <Link
        className="bg-yellow text-blue p-4 rounded-3xl text-md h-14"
        to={href}
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
