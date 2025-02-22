import { useState } from "react";

const HomeViewModel = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //functuon utk onChange
  //disini proeprty memgacu pada nama field property yg ada di compoent inputText

  //nah value adalah nilai yg diinputkan pada component inputText !
  const handleInputChange = (property: string, value: any) => {
    setFormData({ ...formData, [property]: value });
  };
  return {
    ...formData, //return update atau copy smua state yg ada saat ini
    handleInputChange, // kmbalikan functuon utk dipakai di home
  };
};

export default HomeViewModel; //harus pakai export default
