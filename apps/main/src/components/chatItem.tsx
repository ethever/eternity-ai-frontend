import { Box, ListItem } from "@mui/joy";

export function ChatItem({
  variant,
  text,
}: {
  variant: "right" | "left";
  text: string;
}) {
  return (
    <ListItem
      sx={{
        display: "grid",
        justifyContent: variant === "right" ? "end" : "start",
      }}
    >
      <Box
        sx={(theme) => ({
          borderRadius:
            variant === "right" ? "10px 10px 0 10px" : "10px 10px 10px 0",
          border: variant === "right" ? "1px solid #eee" : "none",
          padding: theme.spacing(1),
          background:
            variant === "right" ? "white" : theme.palette.primary[500],
          color: variant === "right" ? "#000" : "#fff",
        })}
      >
        {text}
      </Box>
    </ListItem>
  );
}
