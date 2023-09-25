import {
  AiFillAlipayCircle,
  AiFillBook,
  AiFillProfile,
  AiFillProject,
  AiFillTool,
  AiFillWeiboCircle,
} from "react-icons/ai";
import Collapse from "./Shared/Collapse";
import GeneralInfoControl from "./GeneralInfoControl";
import EducationControl from "./EducationControl";
import { useAppState } from "../state/AppState";
import ExperienceControl from "./ExperienceControl";

const Control = () => {
  const { cv } = useAppState();

  return (
    <div className="w-full h-full overflow-y-scroll no-scrollbar">
      <h1 className="mb-3 text-center text-4xl">Customize your CV</h1>

      <Collapse
        title={
          <div className="flex items-center gap-2">
            <AiFillProfile size={26} />
            <h1 className="text-2xl">General Info</h1>
          </div>
        }
      >
        <GeneralInfoControl />
      </Collapse>

      <Collapse
        title={
          <div className="flex items-center gap-2">
            <AiFillBook size={26} />
            <h1 className="text-2xl">Educations</h1>
          </div>
        }
      >
        {cv.educations.map((education) => (
          <Collapse
            key={education.id}
            title={
              <div>
                <h1 className="text-xl font-medium">
                  {education.degree} / {education.institute} |{" "}
                  {education.studyYear}
                </h1>
              </div>
            }
          >
            <EducationControl education={education} />
          </Collapse>
        ))}
      </Collapse>

      <Collapse
        title={
          <div className="flex items-center gap-2">
            <AiFillProject size={26} />
            <h1 className="text-2xl">Experiences</h1>
          </div>
        }
      >
        {cv.experiences.map((experience) => (
          <Collapse
            key={experience.id}
            title={
              <div>
                <h1 className="text-xl font-medium">
                  {experience.position} / {experience.company} |{" "}
                  {experience.workYear}
                </h1>
              </div>
            }
          >
            <ExperienceControl experience={experience} />
          </Collapse>
        ))}
      </Collapse>

      <Collapse
        title={
          <div className="flex items-center gap-2">
            <AiFillTool size={26} />
            <h1 className="text-2xl">Skills</h1>
          </div>
        }
      >
        <h1>Things</h1>
      </Collapse>

      <Collapse
        title={
          <div className="flex items-center gap-2">
            <AiFillAlipayCircle size={26} />
            <h1 className="text-2xl">Languages</h1>
          </div>
        }
      >
        <h1>Things</h1>
      </Collapse>

      <Collapse
        title={
          <div className="flex items-center gap-2">
            <AiFillWeiboCircle size={26} />
            <h1 className="text-2xl">Hobbies</h1>
          </div>
        }
      >
        <h1>Things</h1>
      </Collapse>
    </div>
  );
};

export default Control;
