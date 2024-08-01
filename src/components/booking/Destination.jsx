import React from "react";

const Destination = () => {
  return (
    <div className="flex flex-col my-2 p-2">
      <label className="font-medium">Destination</label>
      <select className="lg:w-[300px] md:w-full border rounded-md p-2">
        <option>Grande Antiqua</option>
        <option>Key West</option>
        <option>Maldives</option>
        <option>Cozumel</option>
      </select>
    </div>
  );
};

export default Destination;
