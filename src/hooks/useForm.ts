import { ChangeEvent, useState } from "react";

const useForm = <T>(
  initialData: T
): [T, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [formData, setFormData] = useState(initialData);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  return [formData, onInputChange];
};

export default useForm;
