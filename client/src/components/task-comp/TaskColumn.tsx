"use client";

import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Box } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SortIcon from "@mui/icons-material/Sort";

import TaskCard from "./TaskCard";
import CreateTask from "./CreateTask";

interface TaskColumnProps {
  status: string;
  tasks: {
    _id: string;
    title: string;
    description?: string;
    status: string;
    priority?: string;
    deadline?: string;
  }[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        padding: "10px",
        minHeight: "70vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginRight: "10px",
        }}
      >
        <p>{status}</p>
        <SortIcon />
      </Box>
      <Droppable droppableId={status}>
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <TaskCard key={task._id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <CreateTask
        text="Add Task"
        btnColor="linear-gradient(180deg, #3A3A3A 0%, #202020 100%)"
        icon={<AddIcon />}
      />
    </Box>
  );
};

export default TaskColumn;
