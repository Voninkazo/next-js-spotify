import React, { useContext, useEffect } from "react";
import GlobalContext from "../context/context";
import { AppContainer } from "../styles/style";

const PageDetails = () => {
  const { artistData, artistProfile } = useContext(GlobalContext);

  useEffect(() => {
    console.log(artistProfile, "artistData");
  }, [artistProfile]);

  return (
    <AppContainer>
      <div>
        <p>details</p>
        <p>singer name</p>
      </div>
    </AppContainer>
  );
};

export default PageDetails;
