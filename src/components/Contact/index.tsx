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
      <div className="w-1/6">
        <AiFillPhone size={30} />
        <AiFillMail size={30} />
        <AiFillChrome size={30} />
        <AiFillHome size={30} />
      </div>
      <div className="w-5/6">
        <p className="font-medium text-xl">{cv.phone}</p>
        <p className="font-medium text-xl">{cv.email}</p>
        <p className="font-medium text-xl">{cv.website}</p>
        <p className="font-medium text-xl">{cv.location}</p>
      </div>
    </div>
  );
};

export default Contact;
