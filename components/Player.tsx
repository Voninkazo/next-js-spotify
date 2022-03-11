import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export function Player({audioSrc}: any) {
    return (
        <ReactAudioPlayer 
        src={audioSrc}
        autoPlay
        controls />
    )
}