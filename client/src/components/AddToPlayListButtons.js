// import { Button } from 'react-bootstrap';
// import SnackBar from './Snackbar';

// const AddToPlayListButton = ({ song }) => {

//     const handleAdd = () => {


//         let localStore = localStorage.getItem('songs');
//         if (!localStore) {
//             localStorage.setItem('songs', JSON.stringify([song]));
//         } else {
//             let songsArray = JSON.parse(localStore);
//             songsArray.push(song);
//             localStorage.setItem('songs', JSON.stringify(songsArray));
//         }
//     }

//     return (
//         <>
//             {/* <SnackBar toggle /> */}
//             <Button onClick={handleAdd} variant="success">Add to playlist</Button>
//         </>
//     )

// }

// export default AddToPlayListButton;