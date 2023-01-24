import { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons"
const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null)

  const handlePlaySong = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      setIsPlaying(!isPlaying)
      audioRef.current.play()
    }
  }
  const handleDrag = e => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
    console.log(e.target.value)
  }

  // state
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const handleTimeUpdate = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({
      // poate nu trebuie--------
      // ...songInfo,
      currentTime: current,
      duration: duration,
    })
  }
  const getTime = time =>
    Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={handleDrag}
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          type='range'
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={handlePlaySong}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
      <audio
        onLoadedMetadata={handleTimeUpdate}
        onTimeUpdate={handleTimeUpdate}
        ref={audioRef}
        src={currentSong.audio}></audio>
    </div>
  )
}
export default Player
