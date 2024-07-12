import { Link } from "react-router-dom";
import ArrowIcon from "./arrowicon";
import SpeakerIcon from "./speakericon";
import CopyIcon from "./copyicon";
import FilterIcon from "./filtericon";
import useRandomQoute from "../hook/random.qoute";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createPortal } from "react-dom";
import Filter from "./filter";
import Error from "./error";
import TagItem from "./tag.item";
const speech = window.speechSynthesis;

const RandomQoute = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, isError } = useRandomQoute();
  const client = useQueryClient();
  const handleNew = () => {
    client.invalidateQueries({ queryKey: ["random"] });
  };
  const handleSpeak = () => {
    const sp = new SpeechSynthesisUtterance(
      `${data?.data.content} by ${data?.data.author}`
    );
    speech.speak(sp);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(data?.data.content);
  };
  !showModal && (document.body.style.overflow = "visible");

  return (
    <>
      {isError && <Error />}
      <section className="bg-white rounded-3xl p-10">
        <div className="flex flex-col pb-7 items-center border-b-2 border-b-slate-300">
          <p className="text-2xl text-blue font-Poppins mb-10 text-center">
            {isLoading ? "Loading ..." : data?.data.content}
          </p>
          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex flex-row">
              {data?.data.tags.map((tag: string, i: number) => (
                <TagItem key={i} tag={tag} />
              ))}
            </div>
            <Link
              className="text-xl self-end text-black font-Poppins flex justify-between items-center"
              to={"/author" + (isLoading ? "" : `/${data?.data.authorSlug}`)}
            >
              {isLoading ? "" : data?.data.author}
              <ArrowIcon />
            </Link>
          </div>
        </div>
        <div className="mt-7 flex flex-row justify-between items-center">
          <ul className="flex flex-row justify-between items-center">
            <li
              onClick={handleSpeak}
              className="rounded-percent cursor-pointer p-3 bg-yellow mr-3"
            >
              <SpeakerIcon />
            </li>
            <li
              onClick={handleCopy}
              className="rounded-percent cursor-pointer p-3 bg-yellow"
            >
              <CopyIcon />
            </li>
          </ul>
          <div className="flex flex-row justify-between items-center">
            <button
              onClick={() => setShowModal(true)}
              className="p-4 mr-1 bg-yellow rounded-3xl rounded-r-none"
            >
              <FilterIcon />
            </button>
            <button
              onClick={handleNew}
              className="p-3 bg-yellow text-lg rounded-3xl rounded-l-none"
            >
              New Qoute
            </button>
          </div>
        </div>
      </section>
      {showModal &&
        createPortal(
          <Filter open={showModal} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default RandomQoute;
