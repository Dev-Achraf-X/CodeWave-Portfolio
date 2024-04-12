import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Typewriter({ isTyping, title, link, linkTitle }) {
  return (
    <div className="w-full h-[75vh] mb-12 relative half-bg">
      {isTyping ? (
        <ReactTyped
          strings={[
            "Grow Up Your Company.",
            "Grow Up Your Organization.",
            "Grow Up Your Buisness.",
            "Grow Up Your Startups.",
          ]}
          typeSpeed={100}
          backSpeed={20}
          loop
          className="lg:text-[55px] text-5xl text-primary-600 font-bold absolute right-[50%] top-[50%] translate-x-2/4 -translate-y-3/4"
        />
      ) : (
        <h1 className="lg:text-[55px] text-5xl text-primary-600 font-bold absolute md:left-[20%] left-[-20%] top-[50%] translate-x-2/4 -translate-y-3/4">
          {title}
        </h1>
      )}
      <Link
        to={link}
        className="absolute right-[65%] top-[70%] lg:text-xl text-[13px] text-primary-600 font-bold underline underline-offset-8"
      >
        {linkTitle}
      </Link>
    </div>
  );
}

export default Typewriter;
