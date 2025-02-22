import { useState } from "react";

const RegisterViewModel = () => {
  //prpoperty mengacu pada nama field ata nama state mis diatas :'name'
  //value adalah nilai yg diketikan pada inputText ,
  // yatu nilai dari formData.field/ formData.proeprty  contoh formData.email (isinya ya!)

  // const handleInputChange = (property: string, value: any) => {
  //   setFormData({ ...formData, [property]: value });
  // };
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (property: string, value: any) => {
    setFormData({
      ...formData,
      [property]: value,
    });
  };
  return {
    ...formData,
    handleInputChange,
  };
};
export default RegisterViewModel;
