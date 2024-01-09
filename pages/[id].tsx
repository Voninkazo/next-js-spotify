import Head from "next/head";
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
      <Head>
        <title>Add a Shopping Cart to Any Website in Minutes - Snipcart</title>
        <meta
          name="description"
          content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
        />
        <meta
          property="og:title"
          content="Add a Shopping Cart to Any Website in Minutes - Snipcart"
        />
        <meta
          property="og:description"
          content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
        />
        <meta property="og:url" content="https://snipcart.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <div>
        <p>details</p>
        <p>singer name</p>
        {/* <img src="////" alt="assasa" /> */}
      </div>
    </AppContainer>
  );
};

export default PageDetails;
