const LibrarySong = ({ song, songs, setCurrentSong }) => {
  const handleSelectSong = () => {
    // const selectedSong = songs.filter(state => state.id === song.id)
    // const selectedSong = song
    // console.log(selectedSong)
    setCurrentSong(song)
  }
  return (
    <div onClick={handleSelectSong} className='library-song'>
      <img src={song.cover} alt=''></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}
export default LibrarySong
