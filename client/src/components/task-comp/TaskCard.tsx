"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { updateTask } from "@/store/taskSlice";

interface TaskCardProps {
  task: {
    _id: string;
    title: string;
    description?: string;
    status: string;
    priority?: string;
    deadline?: string;
  };
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  switch (task.priority) {
    case "Urgent":
      var color = "#FF6B6B";
      break;
    case "Medium":
      var color = "#FFA235";
      break;
    case "Low":
      var color = "#0ECC5A";
      break;
    default:
      var color = "black";
  }

  const deadline = task.deadline
    ? new Date(task.deadline).toLocaleDateString("en-US")
    : "No Deadline";

  const dispatch = useDispatch();
  const onDragEnd = () => {
    dispatch(updateTask(task));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Draggable draggableId={task._id} index={index}>
        {(provided) => (
          <Box
            sx={{
              width: "250px",
              border: "1px solid #DEDEDE",
              borderRadius: "10px",
              margin: "10px",
              padding: "20px 10px",
              background: "#F9F9F9",
              cursor: "grab",
            }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Typography
              sx={{ color: "#606060", fontSize: "16px", fontWeight: "500" }}
            >
              {task.title}
            </Typography>
            <Typography
              sx={{ fontSize: 14, fontWeight: "400" }}
              color="text.secondary"
              gutterBottom
            >
              {task.description}
            </Typography>
            <Typography
              sx={{
                width: "fit-content",
                backgroundColor: color,
                p: 0.5,
                borderRadius: "5px",
                color: "white",
                fontSize: "12px",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "capitalize",
              }}
            >
              {task.priority}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "10px",
              }}
            >
              <AccessTimeIcon />
              <Typography variant="body2">{deadline}</Typography>
            </Box>
          </Box>
        )}
      </Draggable>
    </DragDropContext>
  );
};

export default TaskCard;
