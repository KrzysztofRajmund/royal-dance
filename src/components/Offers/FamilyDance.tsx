import React from 'react';
//assets
import Image from "../../assets/rd-gif.gif"
//components
import Offers from './Offers';
import OffersTwo from './OffersTwo';
import Header from './Header';
import offerData from "../../offerData.json"



const FamilyDance: React.FC = () => {
    const getIDHandler = (word: string) => {
        let newWord
        if (word.includes(" ")) {
            newWord = word.split(" ")[0]
        } else {
            newWord = word
        }
        return newWord
    }

    return (


        <>
            <Header menuNav={true} image={Image} title="Taniec rekreacyjny" desc="w każdej grupie wiekowej" menu={{ latino: "Latino Ladies", standard: "Kurs tańca dla dorosłych", kids: "Kids mix taneczny", wedding: "Pierwszy taniec" }} />
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