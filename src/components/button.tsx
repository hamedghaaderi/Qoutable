import { Link } from "react-router-dom";

const Button = ({ children , href }: { children: string , href: string}) => {
  return (
    <>
      <Link className="bg-yellow text-blue p-4 rounded-3xl text-md h-14" to={href}>
        {children}
      </Link>
    </>
  );
};

export default Button;
