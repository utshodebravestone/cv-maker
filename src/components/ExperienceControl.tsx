import { useEffect } from "react";
import useForm from "../hooks/useForm";
import { useAppState } from "../state/AppState";
import { actionUpdate } from "../state/types";
import { ExperienceType } from "../types";
import Input from "./Shared/Input";

const ExperienceControl = ({ experience }: { experience: ExperienceType }) => {
  const { cv, dispatch } = useAppState();

  const [formData, onChange] = useForm<ExperienceType>(experience);

  useEffect(() => {
    dispatch(
      actionUpdate({
        ...cv,
        experiences: cv.experiences.map((experience) =>
          experience.id === formData.id ? formData : experience
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
        name="position"
        value={formData.position}
        onChange={onChange}
      />
      <Input
        type="text"
        name="location"
        value={formData.location}
        onChange={onChange}
      />
      <Input
        type="text"
        name="workYear"
        value={formData.workYear}
        onChange={onChange}
      />
      <Input
        type="email"
        name="company"
        value={formData.company}
        onChange={onChange}
      />
      <Input
        type="text"
        name="description"
        value={formData.description}
        onChange={onChange}
      />
    </form>
  );
};

export default ExperienceControl;
