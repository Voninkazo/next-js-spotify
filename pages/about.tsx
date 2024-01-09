import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { AppContainer, FormComponent } from "../styles/style";

const About: NextPage = () => {
  return (
    <AppContainer>
      {/* <Head>
        <title>Spotify Music App</title>
        <meta name="keywords" content="music, streaming, entertainment" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <header className="header">
        <FormComponent>
          <form id="search-form">
            <input
              type="search"
              id="site-search"
              name="q"
              aria-label="Search for an artist..."
            />
            <div className="search-button">
              <button
                className="btn btn-search"
                aria-label="Search"
                type="submit"
              >
                <i className="mobile-icon-search hide-tablet"></i>
                <span className="hide-in-mobile text-link">Search</span>
              </button>
            </div>
          </form>
        </FormComponent>
      </header>

      <main style={{ padding: "16px" }}>
        <div>Anything goes here</div>
      </main>
    </AppContainer>
  );
};

export default About;
