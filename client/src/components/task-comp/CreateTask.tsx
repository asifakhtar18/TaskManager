"use client";

import { Button, ButtonProps } from "@mui/material";
import { useDrawer } from "@/context/DrawerContext";
interface CreateTaskProps extends Omit<ButtonProps, "color"> {
  text: string;
  btnColor: string;
  icon?: React.ReactNode;
  btnBorder?: string;
}

const CreateTask = (props: CreateTaskProps) => {
  const { text, btnColor, icon, btnBorder, ...otherProps } = props;

  const { openDrawer } = useDrawer();
  return (
    <Button
      variant="contained"
      sx={{
        background: btnColor,
        padding: "10px 10px",
        width: "95%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "8px",
        boxShadow: "none",
        border: btnBorder ? `1px solid ${btnBorder}` : "none",
        "&:hover": { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        textTransform: "none",
      }}
      {...otherProps}
      onClick={() => openDrawer()}
    >
      {text}
      {icon}
    </Button>
  );
};
export default CreateTask;
