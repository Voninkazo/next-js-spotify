import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { Player } from '../components/Player';
import GlobalContext from '../context/context';
import { AppContainer, FormComponent } from '../styles/style';

const Home: NextPage = () => {
const { inputValue, setInputValue, searchFunction, artistProfile, artistData, topTracks, artistId } = useContext(GlobalContext);
const [song,setSong] = useState('https://p.scdn.co/mp3-preview/162aa14ef717ba15eb666d76421f8202ac11fe35?cid=774b29d4f13844c495f206cafdad9c86');

  useEffect(() => {
    searchFunction();
  }, [inputValue])

  
console.log(topTracks)

  return (
    <AppContainer>
      <Head>
        <title>Spotify Music App</title>
        <meta name="keywords" content="music, streaming, entertainment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <FormComponent>
          <form id="search-form">
            <input type="search" id="site-search" name="q"
              aria-label="Search for an artist..."
              value={inputValue}
              placeholder="Search for an artist..."
              className="input-search-form"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue && setInputValue(e.target.value)}
            />
            <div className="search-button">
              <button className="btn btn-search" aria-label="Search" type="submit">
                <i className="mobile-icon-search hide-tablet"></i>
                <span className="hide-in-mobile text-link">
                  Search
                </span>
              </button>
            </div>
          </form>
        </FormComponent>
      </header>

      <main style={{ padding: '16px' }}>
        <div>
          {artistData && artistData.items.map((artist: any) => {
            const profileSrc = artistProfile && artistProfile[Math.floor(Math.random() * artistProfile?.length)]?.url;
            return (
              <div key={artist.id}>
                <a href={`/${artistId}`}>
                  <div className="artist-profile">
                    {profileSrc && <Image src={profileSrc} width={100} height={100} />}
                    <p>{artist.name}</p>
                    <span>ARTIST</span>
                  </div>
                </a>
                <div>
                  <h2>Songs</h2>
                  <div className="songs">
                    <ul className="songs-lists-container">
                      {
                        topTracks && topTracks.tracks.map((track: any, index: number) => {
                          const imageSrc = track?.album?.images[Math.floor(Math.random() * track?.album?.images.length)]?.url || '';
                          return (
                            <li key={index} className="song-item">
                              <div className="song-wrapper">
                                <div className="img-container">
                                  <button className="play-btn" id="play-btn" value={track.preview_url} onClick={(e:any) => setSong(e.target.value)}>play</button>
                                  {imageSrc && <Image src={imageSrc} width={100} height={100} />}
                                </div>
                                <div>
                                  <p>{track.name}</p>
                                  <Link href={`/${artistId}`}>
                                    <a>{artist.name}</a>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
          )}
        </div>
        <Player audioSrc={song}/>
      </main>
    </ AppContainer>
  )
}

export default Home
