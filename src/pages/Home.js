import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../components/Search/Search';


function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>

                </div>
                <div className='home__headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                    {/* Icon */}
                    {/* Avatar */}
                </div>
            </div>

            <div className='home__body'>
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" />

                <div className='home__inputContainer'>
                    <Search />
                </div>

            </div>

        </div>
    );
}

export default Home;