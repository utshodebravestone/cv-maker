import { PropsWithChildren } from "react";

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="min-w-fit px-4 py-2 bg-zinc-700 text-white rounded-sm">
          <h1 className="text-2xl uppercase">{title}</h1>
        </div>
        <div className="w-full h-0.5 bg-zinc-700"></div>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
};

export default Section;
