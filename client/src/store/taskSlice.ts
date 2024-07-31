"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

interface Task {
  _id: string;
  title: string;
  description?: string;
  status: string;
  priority?: string;
  deadline?: string;
  user: string;
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk(
  "task/fetchTasks",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      let token = null;
      if (localStorage.getItem("userInfo")) {
        const userInfo = localStorage.getItem("userInfo");
        const parsedUserInfo = JSON.parse(userInfo || "{}");
        token = parsedUserInfo.token;
      } else {
        token = state.auth.userInfo?.token;
      }

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async (taskData: Partial<Task>, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;

      let token = null;

      if (localStorage.getItem("userInfo")) {
        const userInfo = localStorage.getItem("userInfo");
        const parsedUserInfo = JSON.parse(userInfo || "{}");
        token = parsedUserInfo.token;
      } else {
        token = state.auth.userInfo?.token;
      }
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks`,
        taskData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data;
    } catch (error: any) {
      alert(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (taskData: Partial<Task>, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      let token = null;
      if (localStorage.getItem("userInfo")) {
        const userInfo = localStorage.getItem("userInfo");
        const parsedUserInfo = JSON.parse(userInfo || "{}");
        token = parsedUserInfo.token;
      } else {
        token = state.auth.userInfo?.token;
      }
      const { _id, ...rest } = taskData;
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${_id}`,
        rest,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (taskId: string, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      let token = null;

      if (localStorage.getItem("userInfo")) {
        const userInfo = localStorage.getItem("userInfo");
        const parsedUserInfo = JSON.parse(userInfo || "{}");
        token = parsedUserInfo.token;
      } else {
        token = state.auth.userInfo?.token;
      }
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${taskId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return taskId;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.tasks = payload;
      })
      .addCase(fetchTasks.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.tasks.push(payload);
      })
      .addCase(createTask.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.tasks.findIndex((task) => task._id === payload._id);
        if (index !== -1) {
          state.tasks[index] = payload;
        }
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task._id !== payload);
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      });
  },
});

export default taskSlice.reducer;
