import React from 'react';
// import img1 from "../../assets/img1.jpg";
// import img2 from "../../assets/img2.jpg";
// import img3 from "../../assets/img3.jpg";

interface Props {
    sliderContainer: any;
    subcontentContainer: any;
}


const CardsSlider: React.FC<Props> = ({ sliderContainer, subcontentContainer }) => {

    //array of object TYPESCRIPT: solution 1!
    // const images: { id: number, title: string, url: string }[] = [
    //     {
    //         "id": 1,
    //         "title": "",
    //         "url": img1

    //     },
    //     // {
    //     //     "id": 2,
    //     //     "title": "",
    //     //     "url": img2

    //     // },
    //     // {
    //     //     "id": 3,
    //     //     "title": "",
    //     //     "url": img3

    //     // }
    // ]


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

    const expandSlider = () => {
        sliderContainer.classList.toggle("expand");
        subcontentContainer.style.display = "none"
        let arrowButtons: any = document.getElementsByClassName('arrows')


        let showButtonText = document.getElementsByClassName("show-button")[0]
        if (showButtonText.innerHTML === "show") {
            showButtonText.innerHTML = "hide";
            for (var i = 0; i < arrowButtons.length; i++) {
                arrowButtons[i].style.display = "block"
            }
        }


        else {
            showButtonText.innerHTML = "show"
            subcontentContainer.style.display = "block"
            for (var i = 0; i < arrowButtons.length; i++) {
                arrowButtons[i].style.display = "none"
            }
        }
    }


    return (
        <React.Fragment>
            <button className="slider-buttons show-button" onClick={expandSlider}>show</button>
            <div className="slider-buttons arrows arrow-right"><div className="right"></div></div>
            <div className="slider-buttons arrows arrow-left"><div className="left"></div></div>
        </React.Fragment>
    )
}

export default CardsSlider
