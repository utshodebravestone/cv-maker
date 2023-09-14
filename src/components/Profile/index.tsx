import fox from "../../assets/img/fox.png";
import Section from "../Section";
import { useAppState } from "../state/appState";

const Profile = () => {
  const { cv } = useAppState();

  return (
    <div className="relative mb-12">
      <div className="w-56 h-56 absolute top-5 left-5 bg-slate-50 rounded-full">
        {/* TODO: Add image url */}
        <img className="object-contain rounded-full" src={fox} alt={fox} />
      </div>

      <div className="w-full h-28 pb-2 pl-64 flex flex-col justify-end gap-1 bg-zinc-700 text-white rounded-t">
        <h1 className="text-4xl uppercase">{cv.name}</h1>
        <p className="font-light text-xl">{cv.profession}</p>
      </div>

      <div className="w-full h-28 mt-4 pl-64">
        <Section title="About Me">
          <p className="text-normal lg:text-xl">{cv.about}</p>
        </Section>
      </div>
    </div>
  );
};

export default Profile;
