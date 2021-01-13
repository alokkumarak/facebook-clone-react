import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';




  

function Header() {
   
    const [{user},dispatch]=useStateValue();

    return (
        <div className="header">
            <div className="left__header">
                <img
                   className="header__logo" 
                   src="https://th.bing.com/th/id/OIP.Ua5AXhtGRgPuisZVmetclQHaFL?pid=Api&rs=1"
                   alt="fb-logo"
                  />
                  {/* favicon.ico */}
                  <div className="header__input">
                      <SearchIcon />
                      <input type="text" placeholder="search" />

                  </div>
            
         </div>
            <div className="middle__header">
                 <div  className="header__option header__option__active">
                 <HomeIcon />
                 </div>
                 <div  className="header__option">
                 <FlagIcon  />
                 </div>
                 <div  className="header__option">
                 <OndemandVideoIcon  />
                 </div>
                 <div  className="header__option">
                 <StorefrontIcon  />
                 </div>
                 <div  className="header__option">
                 <SupervisedUserCircleRoundedIcon  />
                 </div>
            </div>
            <div className="right__header">
                  <div className="header__avatar">
                      <Avatar src={user.photoURL}/>
                      <h4>{user.displayName}</h4>
                  </div>
                  <IconButton >
                      <AddIcon />
                  </IconButton>
                  <IconButton >
                      <ForumIcon />
                  </IconButton>
                  <IconButton>
                      <NotificationsActiveIcon />
                  </IconButton>
                  <IconButton >
                      <ExpandMoreIcon />
                  </IconButton>
                
            </div>
        </div>
    )
}

export default Header
