import { Box, Typography } from "@mui/material";

interface SideBarItemProps {
  icon: React.ReactNode;
  text: string;
  isSelected?: boolean;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  icon,
  text,
  isSelected = false,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "#797979",
        gap: "8px",
        width: "85%",
        padding: "10px",
        cursor: "pointer",
        marginTop: "10px",
        backgroundColor: isSelected ? "#f5f5f5" : "transparent",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          color: "#797979",
          borderRadius: "10px",
          border: "1px solid #DDDDDD",
        },
        borderRadius: isSelected ? "10px" : "0px",
        border: isSelected ? "1px solid #DDDDDD" : "none",
      }}
    >
      {icon}
      <Typography sx={{ fontSize: "18px" }}>{text}</Typography>
    </Box>
  );
};

export default SideBarItem;
