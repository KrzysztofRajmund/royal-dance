import React from 'react';
import imagesData from "../../imagesData.json";
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
        </section>
    )
}

export default Gallery


