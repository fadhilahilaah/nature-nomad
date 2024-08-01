import React from "react";

const images = [
  {
    id: 1,
    img: "public/images/gallery/gallery-2.jpg",
  },
  {
    id: 2,
    img: "public/images/gallery/gallery-4.jpg",
  },
  {
    id: 3,
    img: "public/images/gallery/gallery-1.jpg",
  },
  {
    id: 4,
    img: "public/images/gallery/gallery-6.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="grid sm:grid-cols-5 gap-4">
      {/* img header */}
      <div className="sm:col-span-3 col-span-2 row-span-2">
        <img
          src="public/images/gallery/gallery-3.jpg"
          alt="/"
          className="w-full h-full object-cover rounded-md shadow-sm"
        />
      </div>

      {images.map((image) => (
        <div key={image.id}>
          <img
            src={image.img}
            alt="/"
            className="w-full h-full object-cover rounded-md shadow-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
