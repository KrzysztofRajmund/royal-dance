import React from 'react';
//assets
import Image from "../../assets/img5.jpg"
//components
import Offers from './Offers';
import OffersTwo from './OffersTwo';
import Header from './Header';
import Menu from "./Menu";


const FamilyDance: React.FC = () => {

    return (


        <>
            <Header image={Image} title="Taniec rekreacyjny" desc="opis opis" menu={{ latino: "Latino Ladies", adults: " Kurs tańca dla dorosłych", kids: "Kids mix taneczny", wedding: " Pierwszy taniec" }} />
            {/* <Menu /> */}
            <Offers title="Latino ladies" subtitle="Taniec dla kobiet" desc="opis opis opis" />
            <OffersTwo title="Latino ladies" subtitle="Taniec dla kobiet" desc="opis opis opis" />
        </>

    )
}

export default FamilyDance;