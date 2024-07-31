"use client";

import Box from "@mui/material/Box";

const MainBox = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #FFFFFF 0%, #AFA3FF 100%)",
      }}
    >
      {children}
    </Box>
  );
};

export default MainBox;
