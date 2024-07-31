"use client";

import React, { useEffect, useState } from "react";
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
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchTasks() as any);
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ flexGrow: 1, marginLeft: "30px" }}>
        <Greet name="" />
        <TaskForm open={false} closeForm={() => null} />
        <TaskBoard />
      </Box>
    </Box>
  );
};

export default Dashboard;
