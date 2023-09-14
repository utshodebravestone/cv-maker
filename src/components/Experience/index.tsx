import { ExperienceType } from "../types";

const Experience = (experience: ExperienceType) => {
  return (
    <div className="flex gap-4">
      <div className="w-2/6">
        <h1 className="text-xl font-bold">{experience.position}</h1>
        <p>{experience.location}</p>
        <p className="font-light">{experience.workYear}</p>
      </div>
      <div className="w-4/6">
        <h1 className="text-xl font-bold">{experience.company}</h1>
        <p>{experience.description}</p>
      </div>
    </div>
  );
};

export default Experience;
