import React, { useEffect, useState } from 'react';

//json
import imagesData from "../../imagesData.json";
//components
import ModalGallery from './ModalGallery';
import Loading from '../utilities/Loading';

const Gallery: React.FC = () => {

    //type or interfaces
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
    const [modalImage, setModalImage] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    //useEffect Hook
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 1000)

    }, [])


    //change image function
    const anotherImage = (sign: number) => {
        let filterImage: any = imagesData.images.filter((x) => x.id === modalImage.id + sign)
        let newImageIndex: number = imagesData.images.indexOf(filterImage[0])
        setModalImage(imagesData.images[newImageIndex])
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
        if (e.target.className === "next-icon" && imagesData.images.indexOf(modalImage) < imagesData.images.length - 1) {
            anotherImage(plusSign);
        }
        if (e.target.className === "prev-icon" && imagesData.images.indexOf(modalImage) >= 1) {
            anotherImage(minusSign);
        }
    }

    //image change conditional with keydown arrows
    if (modal) {
        window.onkeydown = (e: any) => {
            switch (e.keyCode) {
                case 39:
                    if (imagesData.images.indexOf(modalImage) < imagesData.images.length) {
                        anotherImage(plusSign);
                    }
                    break;

                case 37:
                    if (imagesData.images.indexOf(modalImage) >= 1) {
                        anotherImage(minusSign);
                    }
                    break;

            }
        }
    }


    return (
        <React.Fragment>
            { loading ? <Loading /> : (
                <section className="gallery">
                    <h1>Nasze studio</h1>
                    <div className="gallery-images">

                        {imagesData.images.map((image) => {
                            return (
                                <div key={image.id} className="gallery-image" onClick={() => openModalHandler(image)}>
                                    <img src={image.url} alt={`image-${image.id}`} />
                                </div>

                            )
                        })}
                    </div>
                    <div onClick={(e) => modalHandler(e)}>
                        {modal && <ModalGallery id={modalImage.id} url={modalImage.url} />}
                    </div>
                </section>
            )}


        </React.Fragment>

    )
}

export default Gallery;


