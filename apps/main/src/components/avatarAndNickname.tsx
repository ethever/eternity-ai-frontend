import { Avatar, Box, Typography } from "@mui/joy";

export function AvatarAndNickname() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          width: "140px",
          height: "140px",
        }}
      >
        Anna
      </Avatar>
      <Typography>Anna</Typography>
    </Box>
  );
}
