"use client";
import { Typography, Box } from "@mui/material";

const Welcome: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        gap: "5px",
      }}
    >
      <Typography sx={{ fontSize: "48px", fontWeight: "600" }}>
        Welcome to
      </Typography>
      <Typography
        sx={{ color: "#4534AC", fontSize: "48px", fontWeight: "600" }}
      >
        {" "}
        WorkFlo!
      </Typography>
    </Box>
  );
};

export default Welcome;
