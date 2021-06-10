import React from 'react';
//assets
import Image from "../../assets/sportdance.jpg"
//components
import Offers from './Offers';
import OffersTwo from './OffersTwo';
import Header from './Header';
import offerData from "../../offerData.json"



const SportDance: React.FC = () => {
    const getIDHandler = (word: string | undefined) => {
        let newWord: any
        if (word) {
            newWord = word.split(" ")[0]
            return newWord
        }

    }

    return (


        <>
            <Header menuNav={true} image={Image} title="Taniec sportowy" desc="solo i w parze" menu={{ latino: "Latyno-Amerykańskie", standard: "Tańce standardowe", kids: "Kids-Sport", proAM: "System Pro-Am", ballet: "Balet" }} />
            {offerData.offer.map((item) => {
                if (item.category === "taniecsportowy" && offerData.offer.indexOf(item) % 2 === 0) {
                    return <Offers id={getIDHandler(item.title)} title={item.title} subtitle={item.subtitle} desc={item.desc} />
                }
                if (item.category === "taniecsportowy" && offerData.offer.indexOf(item) % 2 === 1) {
                    return <OffersTwo id={getIDHandler(item.title)} title={item.title} subtitle={item.subtitle} desc={item.desc} />
                }
                return null;
            })}
        </>

    )
}

export default SportDance;