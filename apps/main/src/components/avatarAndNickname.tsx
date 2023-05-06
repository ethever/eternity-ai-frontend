import { Avatar, Box, Typography } from "@mui/joy";
import { useAtom } from "jotai";
import { nickNameAtom } from "../state/profile";

export function AvatarAndNickname() {
  const [nickName] = useAtom(nickNameAtom);
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
        {nickName}
      </Avatar>
      <Typography>{nickName}</Typography>
    </Box>
  );
}
