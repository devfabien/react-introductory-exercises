import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit() {
    alert(`Hello ${formData.firstName} ${formData.lastName}!`);
  }
  return (
    <div className="flex p-10 justify-center">
      <form
        className="flex flex-col w-1/3 gap-7 items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-md p-2 border outline-none w-full"
          type="text"
          placeholder="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="rounded-md p-2 border outline-none w-full"
          type="text"
          placeholder="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <button className="uppercase rounded-lg w-1/2 p-3 bg-red-500 text-2xl font-bold text-white">
          Greet me
        </button>
      </form>
    </div>
  );
}
