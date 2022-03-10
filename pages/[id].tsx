import React, { useContext } from "react";
import GlobalContext from "../context/context";

const PageDetails = () => {
    const {artistData, artistProfile} = useContext(GlobalContext);
    console.log(artistProfile, 'artistData');

    return (
        <div>
            <p>details</p>
            <p>singer name</p>
            <img src="////" alt="assasa" />
        </div>
    )
}


export default PageDetails

