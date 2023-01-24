import "./styles/app.scss"
import Player from "./components/Player"
import Song from "./components/Song"
import data from "./util"
import { useState } from "react"
import Library from "./components/Library"
function App() {
  // State
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  )
}

export default App
