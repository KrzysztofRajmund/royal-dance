import React from 'react';
//assets
import Image from "../../assets/rd-gif.gif"
//components
import Offers from './Offers';
import OffersTwo from './OffersTwo';
import Header from './Header';
import offerData from "../../offerData.json"



const FamilyDance: React.FC = () => {
    const getIDHandler = (word: string | undefined): any => {
        let newWord: any;
        let newWordSec: any
        if (word) {
            newWord = word.split(" ")[0]
            newWordSec = word.split(" ")[1]
            return `${newWord}${(newWordSec ? newWordSec : '')}`
        }

    }

    return (


        <>
            <Header menuNav={true} image={Image} title="Taniec rekreacyjny" desc="w każdej grupie wiekowej" menu={{ latino: "Dla Kobiet", standard: "Dla Par", kids: "Dla Dzieci", wedding: "Pierwszy Taniec" }} />
            {offerData.offer.map((item) => {
                if (item.category === "taniecrekreacyjny" && offerData.offer.indexOf(item) % 2 === 0) {
                    return <Offers id={getIDHandler(item.title)} title={item.title} subtitle={item.subtitle} desc={item.desc} />
                }
                if (item.category === "taniecrekreacyjny" && offerData.offer.indexOf(item) % 2 === 1) {
                    return <OffersTwo id={getIDHandler(item.title)} title={item.title} subtitle={item.subtitle} desc={item.desc} />
                }
                return null;
            })}
        </>

    )
}

export default FamilyDance;