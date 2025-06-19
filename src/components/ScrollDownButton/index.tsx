import Link from "next/link";
import { ScrollDownButtonType } from "../../types/globals";

const ScrollDownButton = ({ text, navigateTo }: ScrollDownButtonType) => {
  return (
    <Link
      href={`#${navigateTo}`}
      className="flex flex-col justify-center items-center animate-bounce text-sm gap-2 z-10 font-inter"
    >
      {text}
      <img src="/icons/triangle-icon.png" alt="triangle icon" width={40} />
    </Link>
  );
};
export default ScrollDownButton;
