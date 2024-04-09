import { ReactTyped } from "react-typed";

function Typewriter() {
  return (
    <div>
      <h1>
       I'm a{" "}
        <ReactTyped strings={["Web developper", "Web designer", "Full stack developer"]} typeSpeed={100} backSpeed={20} loop />
      </h1>
    </div>
  );
}

export default Typewriter;
