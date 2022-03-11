import React, { useContext, useEffect } from "react";
import GlobalContext from "../context/context";

const PageDetails = () => {
    const {artistData, artistProfile} = useContext(GlobalContext);
   
    useEffect(() => {
        console.log(artistProfile, 'artistData');
    }, [artistProfile])

    return (
        <div>
            <p>details</p>
            <p>singer name</p>
            {/* <img src="////" alt="assasa" /> */}
        </div>
    )
}


export default PageDetails

