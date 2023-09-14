import { AiFillSetting } from "react-icons/ai";

const Control = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-end gap-1">
        <AiFillSetting size={41} />
        <h1 className="text-4xl">CV Settings</h1>
      </div>
    </div>
  );
};

export default Control;
