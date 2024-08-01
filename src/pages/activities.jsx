import React from "react";
import ActivitiesCard from "../components/activities";

const ActivitiesPage = () => {
  return (
    <section
      className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]"
    >
      {/* card */}
      <ActivitiesCard />
    </section>
  );
};

export default ActivitiesPage;
