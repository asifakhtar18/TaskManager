"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import TaskBoard from "@/components/task-comp/TaskBoard";
import TaskForm from "@/components/task-comp/TaskForm";
import SideBar from "@/components/sidebar/SideBar";
import Greet from "@/components/greetings/Greet";
import { logout } from "../../store/authSlice";
import { fetchTasks } from "../../store/taskSlice";
import { RootState } from "@/store/store";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchTasksCallback = useCallback(() => {
    dispatch(fetchTasks() as any);
  }, [dispatch]);

  useEffect(() => {
    fetchTasksCallback();
  }, [fetchTasksCallback]);

  const { name }: any =
    useSelector((state: RootState) => state.auth.userInfo) || {};

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar name={name || ""} />
      <Box sx={{ flexGrow: 1, marginLeft: "30px" }}>
        <Greet name={name} />
        <TaskForm open={false} closeForm={() => null} />
        <TaskBoard />
      </Box>
    </Box>
  );
};

export default Dashboard;
