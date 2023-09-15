import { SkillType } from "../types";

const Skill = (skill: SkillType) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-xl">{skill.name}</p>
    </div>
  );
};

export default Skill;
