import React from "react";

const Check = (props) => {
  const { title } = props;

  return (
    <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
      <label htmlFor="" className="font-medium">{title}</label>
      <input type="date" className="border rounded-md p-2" />
    </div>
  );
};

export default Check;
