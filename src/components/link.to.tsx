import { Link } from "react-router-dom";
import SearchIcon from "./searchicon";
import useValue from "../store/value";

const LinkTo = () => {
  const { value } = useValue((state: any) => state);

  return (
    <>
      <Link className="rounded-3xl rounded-l-none bg-yellow p-3 h-full" to={"/search" + "?author=" + value}>
          <SearchIcon />
      </Link>
    </>
  );
};

export default LinkTo;
