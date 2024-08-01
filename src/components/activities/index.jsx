import React from "react";

const cards = [
  {
    id: 1,
    title: "Resorts",
    img: "images/activities-images/resort-img.jpg",
  },
  {
    id: 2,
    title: "Cruiser",
    img: "images/activities-images/cruisers-img.jpg",
  },
  {
    id: 3,
    title: "Excursions",
    img: "images/activities-images/excursions-img.jpg",
  },
];

const ActivitiesCard = () => {
  return (
    <>
        {cards.map((card) => (
        <div key={card.id} className="relative p-4 rounded-lg">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white">
            {card.title}
          </h3>
          <img
            src={card.img}
            alt={card.title}
            className="max-w-[640px] w-full h-full object-cover relative border-4 border-white shadow-lg"
          />
        </div>
      ))}
    </>
  );
};

export default ActivitiesCard;
