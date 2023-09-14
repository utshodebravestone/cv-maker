import Education from "../Education";
import Experience from "../Experience";
import List from "../List";
import Profile from "../Profile";
import Section from "../Section";

import { useAppState } from "../state/appState";

const CV = () => {
  const { cv } = useAppState();

  return (
    <div className="w-full h-full bg-slate-50 rounded shadow-md overflow-y-scroll no-scrollbar">
      <Profile />
      <div className="flex gap-2">
        <div className="w-4/6">
          <Section title="Education">
            <List component={Education} data={cv.educations} />
          </Section>
          <Section title="Experience">
            <List component={Experience} data={cv.experiences} />
          </Section>
        </div>
        <div className="w-2/6"></div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
