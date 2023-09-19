import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import Input from "../Shared/Input";

const GeneralInfoControl = () => {
  const [formData, onChange] = useForm({
    name: "",
    profession: "",
    phone: "",
    email: "",
    web: "",
    address: "",
    about: "",
  });

  useEffect(() => {
    console.log(formData);
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
        type="number"
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
      <Input type="url" name="web" value={formData.web} onChange={onChange} />
      <Input
        type="text"
        name="address"
        value={formData.address}
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
