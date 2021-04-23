import React, { useEffect, useRef, useState } from 'react';
import Controls from './Controls';
import Details from './Details';


function Player(props) {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    },[isPlaying])

    const skipSong = (forwards = true) => {
        if(forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1) {
                    temp = 0
                }

                return temp
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.song.length - 1;
                }
                return temp
            })
        }
    };

    return (
        <div className = "player">
           <h4>
               Playing Now
           </h4>
           <Details
              song = {props.songs[props.currentSongIndex]} 
           />
           <Controls 
           isPlaying = {isPlaying}
           setIsPlaying = {setIsPlaying}
           skipSong = {skipSong}
           />
           <audio 
            src={props.songs[props.currentSongIndex].src}
            className = "player__audio"
            controls
            ref = {audioEl}> 
            </audio>

            <p>Next Up:  { " " }
            <span>{props.songs[props.nextSongIndex].title} by { " " }
            {props.songs[props.nextSongIndex].artist}
            </span>
            </p>
        </div>
    )
}

export default Player
