
import React from 'react';
import './LeftComponent.css';
import SidebarRows from './SidebarRows';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ChatIcon from '@material-ui/icons/Chat';

function LeftComponent() {
    return (
        <div className="sidebar">

              <SidebarRows Icon={RestoreRoundedIcon} title="Memories"/>
              <SidebarRows Icon={FlagRoundedIcon} title="Pages"/>
              <SidebarRows Icon={LocalHospitalRoundedIcon} title="Covid-19 tracker"/>
              <SidebarRows Icon={ChatIcon} title="Messanger"/>
              <SidebarRows Icon={PeopleOutlineRoundedIcon} title="Friends"/>
              <SidebarRows Icon={SupervisedUserCircleRoundedIcon} title="Groups" />
              <SidebarRows Icon={BookmarksIcon} title="Saved"/>
              
        </div>
    )
}

export default LeftComponent;
