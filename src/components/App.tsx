import CV from "./CV";
import Control from "./Control";

const App = () => {
  return (
    <div className="w-screen h-screen p-4 flex flex-col xl:flex-row gap-2 bg-white text-slate-800 overflow-scroll no-scrollbar">
      <div className="w-full xl:w-1/4">
        <Control />
      </div>
      <div className="w-full xl:w-3/4">
        <CV />
      </div>
    </div>
  );
};

export default App;
