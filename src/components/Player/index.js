import React, {useState} from "react";

function Player() {
    const [audio, setAudio] = useState(null)
    const [play, setPlay] = useState(false)
    const [current, setCurrent] = useState(0)

    const onPlay = () => {
        audio.play()
        setPlay(true)
    }

    const onPause = () => {
        audio.pause()
        setPlay(false)
    }

    const change = (e) => {
        setCurrent(e.target.value)
        audio.currentTime = e.target.value
        console.log(e)
    }

    return (
        <div className="App">
            <h1>Player</h1>
            {!play
                ? <button onClick={onPlay}>play</button>
                : <button onClick={onPause}>pause</button>
            }
            <input onChange={change} type="range" min={0} value={current} max={audio?.duration || 100}/>
            <audio
                ref={(ref) => setAudio(ref)}
                id="audio"
                // controls
                src="//fs.mp3-party.com/files/track/2022/07/mumij-troll-piratskie-kopii.mp3"></audio>
        </div>
    );
}
export default Player;
