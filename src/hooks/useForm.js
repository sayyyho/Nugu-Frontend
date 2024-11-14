import { useRecoilState } from "recoil";

export const useForm = (atomState) => {
  const [form, setForm] = useRecoilState(atomState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const isValid = Object.values(form).every((value) => value.trim() !== "");

  return {
    form,
    handleChange,
    isValid,
  };
};
