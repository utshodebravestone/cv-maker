import Contact from "../Contact";
import Education from "../Education";
import Experience from "../Experience";
import Hobby from "../Hobby";
import Language from "../Language";
import List from "../List";
import Profile from "../Profile";
import Section from "../Section";
import Skill from "../Skill";

import { useAppState } from "../state/appState";

const CV = () => {
  const { cv } = useAppState();

  return (
    <div className="w-full h-full bg-slate-50 rounded shadow-md overflow-y-scroll no-scrollbar">
      <Profile />
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-4/6">
          <Section title="Education">
            <List component={Education} data={cv.educations} />
          </Section>
          <Section title="Experience">
            <List component={Experience} data={cv.experiences} />
          </Section>
        </div>
        <div className="grid grid-cols-2 lg:flex flex-col gap-x-5 w-full lg:w-2/6">
          <Section title="Skills">
            <List component={Skill} data={cv.skills} />
          </Section>
          <Section title="Languages">
            <List component={Language} data={cv.languages} />
          </Section>
          <Section title="Contact">
            <Contact />
          </Section>
          <Section title="Hobbies">
            <List component={Hobby} data={cv.hobbies} />
          </Section>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
