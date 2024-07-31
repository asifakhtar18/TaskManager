"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { RootState } from "../../store/store";
import TaskBoard from "@/components/task-comp/TaskBoard";
import TaskForm from "@/components/task-comp/TaskForm";
import SideBar from "@/components/sidebar/SideBar";

import { logout } from "../../store/authSlice";
import { fetchTasks } from "../../store/taskSlice";
import { Box } from "@mui/material";
import Greet from "@/components/greetings/Greet";

const Dashboard: React.FC = () => {
  const userInfo = localStorage.getItem("userInfo");
  const dispatch = useDispatch();
  const router = useRouter();

  if (!userInfo) {
    router.push("/login");
  }
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
        <Greet name={JSON.parse(userInfo || "{}").name} />
        <TaskForm open={false} closeForm={() => null} />
        <TaskBoard />
      </Box>
    </Box>
  );
};

export default Dashboard;
