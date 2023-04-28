import { Box } from "@mui/joy";

export function ChatItem({
  variant,
  text,
}: {
  variant: "right" | "left";
  text: string;
}) {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: "10px",
        border: variant === "right" ? "1px solid #eee" : "none",
        padding: theme.spacing(1),
        background: variant === "right" ? "white" : theme.palette.primary[500],
        color: variant === "right" ? "#000" : "#fff",
      })}
    >
      {text}
    </Box>
  );
}
