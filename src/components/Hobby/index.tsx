import { HobbyType } from "../types";

const Hobby = (hobby: HobbyType) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-xl">{hobby.name}</p>
    </div>
  );
};

export default Hobby;
