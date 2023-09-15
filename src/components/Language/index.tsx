import { LanguageType } from "../types";

const Language = (language: LanguageType) => {
  return (
    <div>
      <p>{language.name}</p>
    </div>
  );
};

export default Language;
