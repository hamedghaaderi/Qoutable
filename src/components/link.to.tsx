import { Link } from "react-router-dom";
import SearchIcon from "./searchicon";
import useValue from "../store/value";

const LinkTo = () => {
  const { value } = useValue((state: any) => state);

  return (
    <>
      <Link to={"/search" + "?author=" + value}>
        <button className="rounded-3xl rounded-l-none bg-yellow p-3 w-full h-full">
          <SearchIcon />
        </button>
      </Link>
    </>
  );
};

export default LinkTo;
