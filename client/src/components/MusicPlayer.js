

const MusicPlayer = ({ song }) => {
    return (
        <>
            <audio controls>
                <source src={song.preview}></source>
            </audio>
        </>
    )
}

export default MusicPlayer;