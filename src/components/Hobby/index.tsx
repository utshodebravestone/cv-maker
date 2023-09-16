import { HobbyType } from "../../types";

const Hobby = (hobby: HobbyType) => {
  return (
    <div>
      <p>{hobby.name}</p>
    </div>
  );
};

export default Hobby;
