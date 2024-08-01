import React from "react";
import Destination from "../components/booking/Destination";
import Check from "../components/booking/Check";
import Search from "../components/booking/Search";

const BookingPage = (props) => {
  const { title } = props;

  return (
    <section id="deals" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Book Now</h2>

      <form className="lg:flex lg:justify-between w-full items-center">
        {/* destination options */}
        <Destination />

        {/* Check-in and Check-out section */}
        <Check title="Check-In" />
        <Check title="Check-Out" />

        {/* Search */}
        <Search />
      </form>
    </section>
  );
};

export default BookingPage;
