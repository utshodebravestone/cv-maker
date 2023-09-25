import { useEffect } from "react";
import useForm from "../hooks/useForm";
import { useAppState } from "../state/AppState";
import { actionUpdate } from "../state/types";
import { EducationType } from "../types";
import Input from "./Shared/Input";

const EducationControl = ({ education }: { education: EducationType }) => {
  const { cv, dispatch } = useAppState();

  const [formData, onChange] = useForm<EducationType>(education);

  useEffect(() => {
    dispatch(
      actionUpdate({
        ...cv,
        educations: cv.educations.map((education) =>
          education.id === formData.id ? formData : education
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
        name="institute"
        value={formData.institute}
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
        name="studyYear"
        value={formData.studyYear}
        onChange={onChange}
      />
      <Input
        type="email"
        name="degree"
        value={formData.degree}
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

export default EducationControl;
