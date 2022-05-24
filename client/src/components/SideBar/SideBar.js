import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import React from "react";

const SideBar = () => {
    return (
        <div className="container">

            <section className="sidebar-topics">
                <NavLink to="/" className="item" activeclassname="active">
                    <span>Home</span>
                </NavLink>

                <NavLink to="/discover" className="item" activeclassname="active">
                    <span>Discover</span>
                </NavLink>

                <NavLink to="/playlist" className="item" activeclassname="active">
                    <span>Playlist</span>
                </NavLink>

            </section>

            {/* your library */}
            {/* <section className="sidebar-library">
                <h4>Your Library</h4>
                <NavLink to="/albums" className="item" activeclassname="active">
                    <span>Albums</span>
                </NavLink>

                <NavLink to="/artists" className="item" activeclassname="active">
                    <span>Artists</span>
                </NavLink>

                <NavLink to="/songs" className="item" activeclassname="active">
                    <span>Songs</span>
                </NavLink>

                <NavLink
                
                    to="/playlists"
                    className="item"
                    activeclassname="active"
                >
                    <span>Playlists</span>
                </NavLink>
            </section> */}

            {/* Footer on mobile */}
            <section className="sidebar-mobile">
                <NavLink to="/" className="item" activeclassname="active">
                    {/* <FontAwesomeIcon className="icon" icon={faHome} /> */}
                    <span>Home</span>
                </NavLink>

                <NavLink to="/discover" className="item" activeclassname="active">
                    {/* <FontAwesomeIcon className="icon" icon={faSearch} /> */}
                    <span>Discover</span>
                </NavLink>

                <NavLink

                    to="/favorites"
                    className="item"
                    activeclassname="active"
                >
                    {/* <FontAwesomeIcon className="icon" icon={faHeart} /> */}
                    <span>Favorites</span>
                </NavLink>

                <NavLink to="/radio" className="item" activeclassname="active">
                    {/* <FontAwesomeIcon className="icon" icon={faBroadcastTower} /> */}
                    <span>Radio</span>
                </NavLink>
            </section>
        </div>
    );
};

export default SideBar;