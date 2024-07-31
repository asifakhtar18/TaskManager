"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StreamIcon from "@mui/icons-material/Stream";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CreateIcon from "@mui/icons-material/Create";

import { createTask } from "@/store/taskSlice";
import { useDrawer } from "@/context/DrawerContext";

import {
  Drawer,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";

const Container = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>{children}</Box>
);

interface TaskFormProps {
  open: boolean;
  closeForm: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ open, closeForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();

  const { isOpen, closeDrawer } = useDrawer();

  const handleSubmit = (e: React.FormEvent) => {
    console.log({ title, description, status, priority, deadline });
    e.preventDefault();
    dispatch(createTask({ title, description, status, priority, deadline }));
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeDrawer}>
      <Box>
        <Box sx={{ p: 2 }} onClick={closeDrawer}>
          x
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
          width: 700,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Container>
          <TextField
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            margin="normal"
            fullWidth
            variant="standard"
            sx={{}}
          />
        </Container>
        <Container>
          <StreamIcon />
          <Typography>Status</Typography>
          <FormControl variant="standard" fullWidth>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value as string)}
            >
              <MenuItem value="To-Do">To-Do</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Under Review">Under Review</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Container>
        <Container>
          <ReportProblemIcon />
          <Typography>Priority</Typography>
          <FormControl variant="standard" fullWidth margin="normal">
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value as string)}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Urgent">Urgent</MenuItem>
            </Select>
          </FormControl>
        </Container>

        <Container>
          <CalendarTodayIcon />
          <Typography>Deadline</Typography>
          <TextField
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            variant="standard"
            fullWidth
          />
        </Container>
        <Container>
          <CreateIcon />
          <Typography>Description</Typography>
          <TextField
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            fullWidth
          />
        </Container>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 16 }}
          onClick={handleSubmit}
        >
          Add Task
        </Button>
      </Box>
    </Drawer>
  );
};

export default TaskForm;
