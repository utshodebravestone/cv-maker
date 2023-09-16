import {
  AiFillChrome,
  AiFillHome,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { useAppState } from "../state/appState";

const Contact = () => {
  const { cv } = useAppState();

  return (
    <div className="flex items-center gap-1">
      <div className="flex flex-col gap-1.5 justify-end  w-1/6">
        <AiFillPhone size={22} />
        <AiFillMail size={22} />
        <AiFillChrome size={22} />
        <AiFillHome size={22} />
      </div>
      <div className=" flex flex-col gap-1 justify-end w-5/6">
        <p>{cv.phone}</p>
        <p>{cv.email}</p>
        <p>{cv.website}</p>
        <p>{cv.location}</p>
      </div>
    </div>
  );
};

export default Contact;
