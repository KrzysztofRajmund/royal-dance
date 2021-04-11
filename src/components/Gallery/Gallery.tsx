import React from 'react';
//json
import imagesData from "../../imagesData.json";
//components
import ModalGallery from './ModalGallery';

const Gallery: React.FC = () => {
    console.log(imagesData)
    return (
        <section className="gallery">

            {imagesData.images.map((image) => {
                return (
                    <div key={image.id} className="gallery-image">
                        <img src={image.url} alt={`image-${image.id}`} />
                    </div>

                )
            })}
            <ModalGallery />
        </section>
    )
}

export default Gallery


