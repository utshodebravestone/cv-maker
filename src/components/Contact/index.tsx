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
    <div className="flex gap-2">
      <div className="flex flex-col gap-2.5 justify-end  w-1/6">
        <AiFillPhone size={26} />
        <AiFillMail size={26} />
        <AiFillChrome size={26} />
        <AiFillHome size={26} />
      </div>
      <div className=" flex flex-col gap-3 justify-end w-5/6">
        <p>{cv.phone}</p>
        <p>{cv.email}</p>
        <p>{cv.website}</p>
        <p>{cv.location}</p>
      </div>
    </div>
  );
};

export default Contact;
