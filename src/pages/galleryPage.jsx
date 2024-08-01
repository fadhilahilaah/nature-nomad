import React from "react";
import Gallery from "../components/gallery/Gallery";

const GalleryPage = () => {
  return (
    <section id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>

      {/* image section */}
      <Gallery />
    </section>
  );
};

export default GalleryPage;
