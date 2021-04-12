import React, { useEffect, useState } from 'react';
// import img1 from "../../assets/img1.jpg";
// import img2 from "../../assets/img2.jpg";
// import img3 from "../../assets/img3.jpg";
//utils
import sliderInterval from './../utilities/sliderInterval';

interface Props {
    sliderContainer: any,
    subcontentContainer: any,
    sliderFirst?: any
}


const CardsSlider: React.FC<Props> = ({ sliderContainer, subcontentContainer, sliderFirst }) => {



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

    // const sliderArray: string[] = [img1, img2, img3];


    //useState hooks
    const [count, setCount] = useState<number>(100)
    //slider interval
    sliderInterval(count, sliderFirst);
    //useEffect hooks
    useEffect(() => {
        sliderInterval(count, sliderFirst);
        console.log(count)
    }, [count])


    //show button
    const expandSlider = () => {
        sliderContainer.classList.toggle("expand");
        subcontentContainer.style.display = "none"
        let arrowButtons: any = document.getElementsByClassName('arrows')
        let i

        let showButtonText = document.getElementsByClassName("show-button")[0]
        if (showButtonText.innerHTML === "show") {
            showButtonText.innerHTML = "hide";
            for (i = 0; i < arrowButtons.length; i++) {
                arrowButtons[i].style.display = "block"
            }
        }


        else {
            showButtonText.innerHTML = "show"
            subcontentContainer.style.display = "block"
            for (i = 0; i < arrowButtons.length; i++) {
                arrowButtons[i].style.display = "none"
            }
        }
    }
    //nextImage Arrow Handler
    const nextImageHandler = () => {
        if (count < 300) {
            setCount(count + 100)
        } else {
            setCount(100)
        }

    }

    return (
        <React.Fragment>
            <button className="slider-buttons show-button" onClick={expandSlider}>show</button>
            {window.location.pathname === "/" ?
                <>
                    <div className="slider-buttons arrows arrow-right" onClick={nextImageHandler} ><div className="right"></div></div>
                    <div className="slider-buttons arrows arrow-left"><div className="left"></div></div>
                </> : ""
            }

        </React.Fragment>
    )
}

export default CardsSlider
