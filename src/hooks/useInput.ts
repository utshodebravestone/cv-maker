import { Dispatch, SetStateAction, useState } from "react";

const useForm = <T>(
  initialValue: T
): [T, Dispatch<SetStateAction<T>>, () => void] => {
  const [value, setValue] = useState(initialValue);
  return [value, setValue, () => setValue(initialValue)];
};

export default useForm;
