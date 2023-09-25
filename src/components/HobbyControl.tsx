import { useEffect } from "react";
import useForm from "../hooks/useForm";
import { useAppState } from "../state/AppState";
import { actionUpdate } from "../state/types";
import { HobbyType } from "../types";
import Input from "./Shared/Input";

const HobbyControl = ({ hobby }: { hobby: HobbyType }) => {
  const { cv, dispatch } = useAppState();

  const [formData, onChange] = useForm<HobbyType>(hobby);

  useEffect(() => {
    dispatch(
      actionUpdate({
        ...cv,
        hobbies: cv.hobbies.map((hobby) =>
          hobby.id === formData.id ? formData : hobby
        ),
      })
    );
  }, [formData]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="px-4 flex flex-col gap-1"
    >
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
      />
    </form>
  );
};

export default HobbyControl;
