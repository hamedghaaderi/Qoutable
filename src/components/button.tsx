import { Link } from "react-router-dom";

const Button = ({ children , href }: { children: string , href: string}) => {
  return (
    <>
      <Link to={href}>
        <button className="bg-yellow p-3 rounded-xl text-sm">{children}</button>
      </Link>
    </>
  );
};

export default Button;
