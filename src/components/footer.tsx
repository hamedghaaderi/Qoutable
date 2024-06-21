import logo from "../assets/images/logo-quotable.png";
import InstagramIcon from "./instagramicon";
import TelegramIcon from "./telegramicon";
import XIcon from "./xicon";
import YoutubeIcon from "./youtubeicon";

const Footer = () => {
  return (
    <>
      <footer className="bg-back2 py-10 px-20 grid grid-cols-3 grid-rows-1 gap-x-24">
        <p className="text-center my-auto text-blue text-lg">
          We have made this website using{" "}
          <a
            className="text-black underline"
            href="https://github.com/lukePeavey/quotable"
          >
            Quotable API
          </a>
          .
        </p>
        <div className="m-auto">
          <img width="200" src={logo} alt="Logo" />
        </div>
        <div className="flex flex-col justify-around">
          <h4 className="text-blue text-center text-lg">
            follow us on social media
          </h4>
          <div className="flex flex-row justify-around">
            <a href="https://twitter.com/">
              <XIcon />
            </a>
            <a href="https://www.youtube.com/">
              <YoutubeIcon />
            </a>
            <a href="https://telegram.org/">
              <TelegramIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
