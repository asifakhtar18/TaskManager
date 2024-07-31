"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import TaskBoard from "@/components/task-comp/TaskBoard";
import TaskForm from "@/components/task-comp/TaskForm";
import SideBar from "@/components/sidebar/SideBar";
import Greet from "@/components/greetings/Greet";
import { logout } from "../../store/authSlice";
import { fetchTasks } from "../../store/taskSlice";

const Dashboard: React.FC = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  useEffect(() => {
    dispatch(fetchTasks() as any);
  }, [dispatch]);
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ flexGrow: 1, marginLeft: "30px" }}>
        <Greet name={userInfo?.name} />
        <TaskForm open={false} closeForm={() => null} />
        <TaskBoard />
      </Box>
    </Box>
  );
};

export default Dashboard;
