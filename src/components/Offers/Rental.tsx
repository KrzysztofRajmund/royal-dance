import React from 'react';
//assets
import Image from "../../assets/rental.jpg"
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
            <Header image={Image} title="Wynajem Studia" desc="Wynajem studia dla osób prywatnych i firm" menu={{}} />
            {offerData.offer.map((item) => {
                if (item.category === "wynajem") {
                    return <Offers id={getIDHandler(item.title)} title={item.title} subtitle={item.subtitle} desc={item.desc} />
                }
            })}
        </>

    )
}

export default FamilyDance;