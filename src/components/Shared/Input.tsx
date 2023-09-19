import { ChangeEvent } from "react";

const Input = ({
  type,
  name,
  value,
  onChange,
}: {
  type: "text" | "email" | "number" | "url";
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={name} className="text-xl capitalize">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="p-2 border border-gray-200 rounded outline-none focus:border-gray-500"
      />
    </div>
  );
};

export default Input;
