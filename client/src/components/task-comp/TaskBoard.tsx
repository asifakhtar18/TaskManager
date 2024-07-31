"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../../store/taskSlice";
import TaskColumn from "./TaskColumn";
import { RootState } from "../../store/store";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import CreateTask from "./CreateTask";

import { useDrawer } from "../../context/DrawerContext";

const TaskBoard: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: RootState) => state.task);

  const { isOpen, closeDrawer } = useDrawer();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onDragEnd = (result: DropResult) => {
    // Handle task reordering logic here
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-board">
        {["To-Do", "In Progress", "Under Review", "Completed"].map((status) => (
          <TaskColumn
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
