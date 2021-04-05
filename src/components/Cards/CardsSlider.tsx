import React from 'react';
import img1 from "../../assets/img1.jpg";
// import img2 from "../../assets/img2.jpg";
// import img3 from "../../assets/img3.jpg";



const CardsSlider: React.FC = () => {


    //array of object TYPESCRIPT: solution 1!
    const images: { id: number, title: string, url: string }[] = [
        {
            "id": 1,
            "title": "",
            "url": img1

        },
        // {
        //     "id": 2,
        //     "title": "",
        //     "url": img2

        // },
        // {
        //     "id": 3,
        //     "title": "",
        //     "url": img3

        // }
    ]


    //array of object TYPESCRIPT: solution 2!
    // type Images = {
    //     id: number,
    //     title: string,
    //     url: string
    // }
    // const imagesSecond: Images[] = [
    //     {
    //         "id": 1,
    //         "title": "",
    //         "url": "img1.jpg"

    //     },
    //     {
    //         "id": 2,
    //         "title": "",
    //         "url": "img2.jpg"

    //     },
    //     {
    //         "id": 3,
    //         "title": "",
    //         "url": "img3.jpg"

    //     }
    // ]


    return (
        <React.Fragment>
            {images.map((image) => {
                return (
                    <img key={image.id} src={image.url} alt="" />
                )
            })}
        </React.Fragment>
    )
}

export default CardsSlider
