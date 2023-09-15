import { SkillType } from "../types";

const Skill = (skill: SkillType) => {
  return (
    <div>
      <p>{skill.name}</p>
    </div>
  );
};

export default Skill;
