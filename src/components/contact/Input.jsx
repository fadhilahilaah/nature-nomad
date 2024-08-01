import React from "react";

const Input = (props) => {
  const { placeholder, type } = props;

  return (
    <input className="border m-2 p-2 rounded-md" type={type} placeholder={placeholder} />
  );
};

export default Input;
