import { EducationType } from "../../types";

const Education = (education: EducationType) => {
  return (
    <div className="flex gap-4">
      <div className="w-2/6">
        <h1 className="text-xl font-bold">{education.institute}</h1>
        <p>{education.location}</p>
        <p className="font-light">{education.studyYear}</p>
      </div>
      <div className="w-4/6">
        <h1 className="text-xl font-bold">{education.degree}</h1>
        <p>{education.description}</p>
      </div>
    </div>
  );
};

export default Education;
