import { Box, Typography } from "@mui/material";

export default function Greet({ name }: { name: string }) {
  const date = new Date();
  const hour = date.getHours();
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography sx={{ fontSize: "48px", fontWeight: "600" }}>
        {hour > 12 ? "Good Afternoon," : "Good Morning,"} {name}!
      </Typography>
    </Box>
  );
}
