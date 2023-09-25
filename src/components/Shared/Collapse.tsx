import { PropsWithChildren, ReactNode } from "react";
import useToggle from "../../hooks/useToggle";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Collapse = ({
  children,
  title,
}: PropsWithChildren<{ title: ReactNode }>) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  return (
    <>
      <div className="p-2 flex justify-between items-center shadow-inner border-b border-gray-100 overflow-hidden">
        {title}
        <button onClick={toggleIsOpen}>
          {isOpen ? <AiFillCaretUp size={33} /> : <AiFillCaretDown size={33} />}
        </button>
      </div>
      <div className="my-4">{isOpen && children}</div>
    </>
  );
};

export default Collapse;
