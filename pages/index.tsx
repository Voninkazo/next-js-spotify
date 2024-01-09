import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Player } from "../components/Player";
import GlobalContext from "../context/context";
import { AppContainer, FormComponent } from "../styles/style";

const Home: NextPage = () => {
  const {
    inputValue,
    setInputValue,
    searchFunction,
    artistProfile,
    artistData,
    topTracks,
    artistId,
  } = useContext(GlobalContext);

  const defaultSongUrl = topTracks && topTracks.tracks[0].preview_url;

  const [song, setSong] = useState(defaultSongUrl);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    searchFunction();
  }, [inputValue]);


  function setPlyState() {
    setIsPlaying(!isPlaying);
  }

  return (
    <AppContainer>
      <header className="header">
        <FormComponent>
          <form id="search-form">
            <input
              type="search"
              id="site-search"
              name="q"
              aria-label="Search for an artist..."
              value={inputValue}
              placeholder="Search for an artist..."
              className="input-search-form"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue && setInputValue(e.target.value)
              }
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
        <div>
          {artistData &&
            artistData.items.map((artist: any) => {
              const profileSrc =
                artistProfile &&
                artistProfile[Math.floor(Math.random() * artistProfile?.length)]
                  ?.url;
              return (
                <div key={artist.id}>
                  <a href={`/${artistId}`}>
                    <div className="artist-profile">
                      {profileSrc && (
                        <Image src={profileSrc} width={100} height={100} />
                      )}
                      <p>{artist.name}</p>
                      <span>ARTIST</span>
                    </div>
                  </a>
                  <div>
                    <h2>Songs</h2>
                    <div className="songs">
                      <ul className="songs-lists-container">
                        {topTracks &&
                          topTracks.tracks.map((track: any, index: number) => {
                            const imageSrc =
                              track?.album?.images[
                                Math.floor(
                                  Math.random() * track?.album?.images.length
                                )
                              ]?.url || "";
                            return (
                              <li key={index} className="song-item">
                                <div className="song-wrapper">
                                  <div className="img-container">
                                    <button
                                      className="play-btn"
                                      id="play-btn"
                                      value={track.preview_url}
                                      onClick={(e: any) => {
                                        setSong(e.target.value), setPlyState();
                                      }}
                                    >
                                      {isPlaying ? "playing" : "pause"}
                                    </button>
                                    {imageSrc && (
                                      <Image
                                        src={imageSrc}
                                        width={100}
                                        height={100}
                                      />
                                    )}
                                  </div>
                                  <div>
                                    <p>{track.name}</p>
                                    <Link href={`/${artistId}`}>
                                      <a>{artist.name}</a>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <Player audioSrc={song} />
        <button type="button" value="asaa" onClick={() => console.log("next")}>
          next song
        </button>
      </main>
    </AppContainer>
  );
};

export default Home;
