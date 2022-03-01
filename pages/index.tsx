import { findIndex, lastIndexOf } from 'lodash';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import React, { useContext, useEffect } from 'react'
import GlobalContext from '../context/context';
import { AppContainer, FormComponent } from '../styles/style';



const Home: NextPage = ({ artists }: any) => {
  console.log(artists, 'artists')
  const { inputValue, setInputValue, searchFunction, artistData, topTracks, artistId } = useContext(GlobalContext)

  console.log(inputValue, 'inputValue')
  useEffect(() => {
    searchFunction()
  }, [inputValue])

  return (
    <AppContainer>
      <Head>
        <title>Spotify App</title>
        <meta name="description" content="Generated by create next app" />
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
          {artistData && artistData.items.map((artist: any) =>
          (
            <div key={artist.id}>
              <a href={`/${artistId}`}>
                <div className="artist-profile">
                  <Image src="https://i.scdn.co/image/ab67616100005174ceead049d538f0b5087041dd" width={100} height={100} />
                  <p>{artist.name}</p>
                  <span>ARTIST</span>
                  {/* { artistProfile && artistData && <Image loader={GraphCMSImageLoader} src={artistProfile[0].url} />} */}
                </div>
              </a>
              <div>
                <h2>Songs</h2>
                <div className="songs">
                  <ul className="songs-lists-container">
                    {
                      topTracks && topTracks.tracks.map((track: any, index: number) => {
                        return (
                          <li key={index} className="song-item">
                            <div className="song-wrapper">
                              <div className="img-container">
                                <button className="play-btn" id="play-btn">play</button>
                                <Image src="https://i.scdn.co/image/ab67616d0000485115f19e3b1fbfc5a2f164fb6a" width={100} height={100} />
                              </div>
                              <div>
                                <p>{track.name}</p>
                                <a href={`/${artistId}`}>{artist.name}</a>
                              </div>
                              {/* <Image src={track.images?.[0]?.url} width={100} height={100}/> */}
                              {/* <p>{track.preview_url}</p> */}
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
          )}
        </div>
      </main>
    </ AppContainer>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      artists: ["test2", "tets2"]
    }
  }
}
