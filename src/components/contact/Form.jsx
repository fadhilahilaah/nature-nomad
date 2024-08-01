import React from "react";
import Input from "./Input";

const ContactForm = (props) => {
  const { placeholder, type } = props;

  return (
    <form>
      <div className="grid grid-cols-2">
        {/* first name */}
        <Input type="text" placeholder="First Name" />

        {/* last name */}
        <Input type="text" placeholder="Last Name" />

        {/* email */}
        <Input type="text" placeholder="Email" />

        {/* phone */}
        <Input type="tel" placeholder="Phone" />

        {/* address */}
        <input
          className="border col-span-2 p-2 m-2 rounded-md"
          type="text"
          placeholder="Address"
        />

        <textarea
          className="border col-span-2 m-2 p-2 rounded-md"
          cols="30"
          rows="10"
        ></textarea>
        <button className="col-span-2 m-2">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
