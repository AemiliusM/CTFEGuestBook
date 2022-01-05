import { React, useState } from 'react';

export function useForm(inputs = {}) {
  const [formState, setFormstate] = useState(inputs);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormstate((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return { formState, handleFormChange };
}
