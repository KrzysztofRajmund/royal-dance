import React from 'react';
import img1 from "../../assets/img1.jpg";

const ModalGallery: React.FC = () => {
    return (
        <section className="modal">
            <img src={img1} alt="image" />
        </section>
    )
}

export default ModalGallery;
