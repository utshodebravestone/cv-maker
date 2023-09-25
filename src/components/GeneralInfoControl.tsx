import { useEffect } from "react";
import useForm from "../hooks/useForm";
import Input from "./Shared/Input";
import { useAppState } from "../state/AppState";
import { actionUpdate } from "../state/types";

const GeneralInfoControl = () => {
  const { cv, dispatch } = useAppState();

  const [formData, onChange] = useForm({
    name: cv.name,
    profession: cv.profession,
    phone: cv.phone,
    email: cv.email,
    website: cv.website,
    location: cv.location,
    about: cv.about,
    image: cv.image,
  });

  useEffect(() => {
    dispatch(actionUpdate({ ...cv, ...formData }));
  }, [formData]);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="px-4 flex flex-col gap-1"
    >
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
      />
      <Input
        type="text"
        name="profession"
        value={formData.profession}
        onChange={onChange}
      />
      <Input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={onChange}
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
      />
      <Input
        type="url"
        name="website"
        value={formData.website}
        onChange={onChange}
      />
      <Input
        type="text"
        name="location"
        value={formData.location}
        onChange={onChange}
      />
      <Input
        type="url"
        name="image"
        value={formData.image}
        onChange={onChange}
      />
      <Input
        type="text"
        name="about"
        value={formData.about}
        onChange={onChange}
      />
    </form>
  );
};

export default GeneralInfoControl;
