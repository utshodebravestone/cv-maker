import { useEffect } from "react";
import useForm from "../hooks/useForm";
import { useAppState } from "../state/AppState";
import { actionUpdate } from "../state/types";
import { SkillType } from "../types";
import Input from "./Shared/Input";

const SkillControl = ({ skill }: { skill: SkillType }) => {
  const { cv, dispatch } = useAppState();

  const [formData, onChange] = useForm<SkillType>(skill);

  useEffect(() => {
    dispatch(
      actionUpdate({
        ...cv,
        skills: cv.skills.map((skill) =>
          skill.id === formData.id ? formData : skill
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

export default SkillControl;
