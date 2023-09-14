import fox from "../../assets/img/fox.png";
import Section from "../Section";

const Profile = () => {
  return (
    <div className="relative">
      <div className="w-56 h-56 absolute top-5 left-5 bg-slate-50 rounded-full">
        <img className="object-contain rounded-full" src={fox} alt={fox} />
      </div>

      <div className="w-full h-28 pb-2 pl-64 flex flex-col justify-end gap-1 bg-zinc-700 text-white rounded">
        <h1 className="text-4xl uppercase">Foxila O'Doexi</h1>
        <p className="font-light text-xl">Tricks N' Trap Designer</p>
      </div>

      <div className="w-full h-28 mt-4 pl-64">
        <Section title="About Me">
          <p className="text-normal lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptatibus eaque blanditiis nemo. Voluptatibus excepturi adipisci
            illum nobis dicta assumenda optio.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default Profile;
