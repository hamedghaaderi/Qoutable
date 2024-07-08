import { useState } from "react";
import ArrowUpIcon from "./arrowupicon";

const ToTop = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    !show && window.scrollY > 300 && setShow(true);
    show && window.scrollY <= 300 && setShow(false);
  });
  const handleClick = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={
          show
            ? "bg-yellow p-2 animate-fadein opacity-100 fixed right-6 bottom-6 rounded-percent"
            : "bg-yellow p-2 animate-fadeout opacity-0 fixed right-6 bottom-6 rounded-percent"
        }
      >
        <ArrowUpIcon />
      </button>
    </>
  );
};

export default ToTop;
