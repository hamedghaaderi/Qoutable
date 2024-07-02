import { useSearchParams } from "react-router-dom";
import SearchIcon from "./searchicon";
import useValue from "../store/value";

const ButtonInput = () => {
  const [, setSearchParams] = useSearchParams();
  const { value } = useValue((state: any) => state);
  const handleClick = () => {
    setSearchParams(`author=${value}`)
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="rounded-3xl rounded-l-none bg-yellow p-3"
      >
        <SearchIcon />
      </button>
    </>
  );
};

export default ButtonInput;
