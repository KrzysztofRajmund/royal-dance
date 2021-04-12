import React, { useState } from 'react';
//json
import imagesData from "../../imagesData.json";
//components
import ModalGallery from './ModalGallery';

const Gallery: React.FC = () => {

    //type or interface
    type ImageObject = {
        id: number,
        category?: string,
        url: string
    }

    //global var
    const plusSign: number = 1;
    const minusSign: number = -1;
    //useState hooks
    const [modal, setModal] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<any>()


    //change image function
    const anotherImage = (sign: number) => {
        let newImage = imagesData.images.filter((x) => x.id === modalImage.id + sign)
        setModalImage(newImage[0])
    }


    //open modal
    const openModalHandler = (image: ImageObject) => {
        setModal(true);
        setModalImage(image);

    }

    //close modal + conditional image change with click
    const modalHandler = (e: any) => {
        if (e.target.className === "modal-container" || e.target.className === "x-icon") {
            setModal(false)
        }
        if (e.target.className === "next-icon" && modalImage.id < imagesData.images.length) {
            anotherImage(plusSign);
        }
        if (e.target.className === "prev-icon" && modalImage.id !== 1) {
            anotherImage(minusSign);
        }
    }

    //image change conditional with keydown arrows
    if (modal) {
        window.onkeydown = (e: any) => {
            switch (e.keyCode) {
                case 39:
                    if (modalImage.id < imagesData.images.length) {
                        anotherImage(plusSign);
                    }
                    break;

                case 37:
                    if (modalImage.id !== 1) {
                        anotherImage(minusSign);
                    }
                    break;

            }
        }
    }


    return (

        <section className="gallery">

            {imagesData.images.map((image) => {
                return (
                    <div key={image.id} className="gallery-image" onClick={() => openModalHandler(image)}>
                        <img src={image.url} alt={`image-${image.id}`} />
                    </div>

                )
            })}
            <div onClick={(e) => modalHandler(e)}>
                {modal && <ModalGallery id={modalImage.id} url={modalImage.url} />}
            </div>
        </section>


    )
}

export default Gallery;


