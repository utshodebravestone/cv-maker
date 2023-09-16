import { AiFillControl } from "react-icons/ai";
import CV from "./CV";
import Control from "./Control";
import Collapse from "./Collapse";

const App = () => {
  return (
    <div className="w-screen h-screen p-4 flex flex-col xl:flex-row gap-5 bg-white text-slate-800 overflow-scroll no-scrollbar">
      <div className="w-full xl:w-1/4">
        <Collapse
          title={
            <div className="flex items-center gap-2">
              <AiFillControl size={35} />
              <h1 className="text-3xl">Customization</h1>
            </div>
          }
        >
          <Control />
        </Collapse>
      </div>
      <div className="w-full xl:w-3/4">
        <CV />
      </div>
    </div>
  );
};

export default App;
