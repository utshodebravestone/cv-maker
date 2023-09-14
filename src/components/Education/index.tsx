import { EducationType } from "../types";

const Education = (education: EducationType) => {
  return (
    <div className="flex gap-10">
      <div className="min-w-fit">
        <h1 className="text-xl font-bold">{education.institute}</h1>
        <p>{education.location}</p>
        <p className="font-light">{education.studyYear}</p>
      </div>
      <div>
        <h1 className="text-xl font-bold">{education.degree}</h1>
        <p>{education.description}</p>
      </div>
    </div>
  );
};

export default Education;
