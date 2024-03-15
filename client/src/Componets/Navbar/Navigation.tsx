import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GamepadIcon from "@mui/icons-material/Gamepad";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        gap: "3rem",
        justifyContent: "center",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: "#fff",
          padding: "1rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
      >
        <HomeIcon fontSize="large" />
      </NavLink>
      <NavLink
        to="/tv"
        style={({ isActive }) => ({
          color: "#fff",
          padding: "1rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
      >
        <TvIcon fontSize="large" />
      </NavLink>
      <NavLink
        to="/store"
        style={({ isActive }) => ({
          color: "#fff",
          padding: "1rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
      >
        <StorefrontIcon fontSize="large" />
      </NavLink>
      <NavLink
        to="/diversity"
        style={({ isActive }) => ({
          color: "#fff",
          padding: "1rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
      >
        <Diversity3Icon fontSize="large" />
      </NavLink>
      <NavLink
        to="/game"
        style={({ isActive }) => ({
          color: "#fff",
          padding: "1rem",
          borderBottom: isActive ? "2px solid white" : "",
        })}
      >
        <GamepadIcon fontSize="large" />
      </NavLink>
    </Box>
  );
};

export default Navigation;
