import { useEffect } from "react";
import useForm from "../hooks/useForm";
import { useAppState } from "../state/AppState";
import { actionUpdate } from "../state/types";
import { LanguageType } from "../types";
import Input from "./Shared/Input";

const LanguageControl = ({ language }: { language: LanguageType }) => {
  const { cv, dispatch } = useAppState();

  const [formData, onChange] = useForm<LanguageType>(language);

  useEffect(() => {
    dispatch(
      actionUpdate({
        ...cv,
        languages: cv.languages.map((language) =>
          language.id === formData.id ? formData : language
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

export default LanguageControl;
