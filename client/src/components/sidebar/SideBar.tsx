"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Avatar, Box, Button, Typography } from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import StreamIcon from "@mui/icons-material/Stream";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { logout } from "../../store/authSlice";
import SideBarItem from "./SideBarItem";
import CreateTask from "../task-comp/CreateTask";

const SideBar: React.FC = () => {
  const userInfo = localStorage.getItem("userInfo");
  const { name } = JSON.parse(userInfo || "{}");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  return (
    <Box sx={{ width: "250px", height: "100vh", background: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          gap: "3px",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Avatar sx={{ width: "36px", height: "36px" }} />
        <Typography
          sx={{ fontSize: "24px", fontWeight: "600", padding: "10px" }}
        >
          {name}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Box>
          <NotificationsIcon />
          <StreamIcon />
          <KeyboardDoubleArrowRightIcon />
        </Box>
        <Button
          variant="contained"
          size="small"
          onClick={handleLogout}
          sx={{
            background: " #F4F4F4",
            color: "#797979",
            border: "none",
            boxShadow: "none",
            "&:hover": {
              background: " #F4F4F4",
              color: "#797979",
              border: "none",
              boxShadow: "none",
            },
          }}
        >
          Logout
        </Button>
      </Box>
      <Box sx={{ paddingLeft: "10px" }}>
        <SideBarItem icon={<HomeIcon />} text="Home" isSelected />
        <SideBarItem icon={<SettingsIcon />} text="Settings" />
        <SideBarItem icon={<LeaderboardIcon />} text="Leaderboard" />
        <SideBarItem icon={<PeopleAltIcon />} text="Friends" />
        <SideBarItem icon={<TrendingUpIcon />} text="Trending" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <CreateTask
          text="Create new task"
          icon={<AddCircleIcon />}
          btnColor="linear-gradient(180deg, #4C38C2 0%, #2F2188 100%)"
          btnBorder="linear-gradient(360deg, #4B36CC 0%, #9C93D4 107.69%)"
        />
      </Box>
    </Box>
  );
};

export default SideBar;
