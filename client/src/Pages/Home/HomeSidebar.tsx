import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { muicss } from '../../Utils/muicss'
import { NavLink } from 'react-router-dom'
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
import SignalCellularAltTwoToneIcon from '@mui/icons-material/SignalCellularAltTwoTone';

const HomeSidebar = () => {
  return (
    <Box sx={muicss.homeSidebarContainer}>
       <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        <Typography>Nootan Lodhi</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <PeopleAltTwoToneIcon fontSize='large'/>
        <Typography>Friends</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <AccessTimeTwoToneIcon fontSize='large'/>
        <Typography>Memories</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <BookmarkTwoToneIcon fontSize='large'/>
        <Typography>Saved</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <Groups2TwoToneIcon fontSize='large'/>
        <Typography>Groups</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <OndemandVideoTwoToneIcon fontSize='large'/>
        <Typography>Video</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <LocalGroceryStoreTwoToneIcon fontSize='large'/>
        <Typography>Marketplace</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <ChatBubbleTwoToneIcon fontSize='large'/>
        <Typography>Feeds</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <InsertInvitationTwoToneIcon fontSize='large'/>
        <Typography>Events</Typography>
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          padding: "0.5rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
        className="home-sidebar"
      >
         <SignalCellularAltTwoToneIcon fontSize='large'/>
        <Typography>Adds Manager</Typography>
      </NavLink>
    </Box>
  )
}

export default HomeSidebar