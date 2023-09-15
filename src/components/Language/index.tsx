import { LanguageType } from "../types";

const Language = (language: LanguageType) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-xl">{language.name}</p>
    </div>
  );
};

export default Language;
