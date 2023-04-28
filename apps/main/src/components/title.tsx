import { Box, Typography } from "@mui/joy";
import { ReactNode } from "react";

export function Title({ right, title }: { right?: ReactNode; title: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "no-wrap",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography fontWeight={700} noWrap>
        {title}
      </Typography>
      {right}
    </Box>
  );
}
