import React, { useState } from "react";
import LightBoxHeader from "./LightBoxHeader";
import Lightbox from "react-spring-lightbox";

function GalleryLightBox({ displayImage, images, name, category, categories }) {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const imageList = images.map((item) => {
    return {
      ...item,
      src: item.image,
    };
  });

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  const displayCategory = categories
    .filter((c) => c.id === category)
    .map((c) => c.category);

  return (
    <div>
      <div className="content" onClick={() => setOpen(true)}>
        <div className="content-overlay"></div>
        <img className="gallery-img" src={displayImage} alt="gallery-img" />
        <div className="content-details fadeIn-bottom">
          <h3 className="content-title">{name}</h3>
          <p className="content-text">{displayCategory}</p>
        </div>
      </div>
      {isOpen ? (
        <Lightbox
          isOpen={true}
          onClose={() => setOpen(false)}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          images={imageList}
          currentIndex={currentImageIndex}
          renderHeader={() => (
            <LightBoxHeader
              images={images}
              currentIndex={currentImageIndex}
              setOpen={setOpen}
              name={name}
            />
          )}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        />
      ) : null}
    </div>
  );
}

export default GalleryLightBox;
