import React from 'react';
import { SkipNext, SkipPrevious,PlayArrow,Pause } from "@material-ui/icons"

function Controls(props) {
    return (
        <div className = "control">
            <button className = "control__SkipBtn" onClick = {() =>props.skipSong()}>
                  <SkipPrevious/>
            </button>
            <button className = "control__playButton" onClick = { () => props.setIsPlaying(!props.isPlaying)}>
                  {props.isPlaying ? <Pause/> : <PlayArrow/>}
            </button>

            <button className = "control__SkipBtn" onClick = { () => props.skipSong()}>
                  <SkipNext/>
            </button>
        </div>
    )
}

export default Controls
