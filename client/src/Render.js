import Playlist from "./pages/PlaylistPage";
import SearchPage from "./pages/SearchPage";

const Render = ({ page,component }) => {
    let context = '';
    switch (page) {
        // case 'home':
        //     context = <SearchPage />
        //     break;

        case 'playlist':
            context = <Playlist />
            break;

        default:
            break;
    }
    return (
        <>
            {context}
        </>
    );
}

export default Render;