import { Box, Typography } from "@mui/joy";

export type ColorVariant = "light" | "dark";

export function SectionTitle({
  title,
  subTitle,
  color,
}: {
  title: string;
  subTitle: string;
  color: ColorVariant;
}) {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(1),
      })}
    >
      <Typography
        level="h2"
        fontWeight="bold"
        sx={{
          color: color === "light" ? "white" : "black",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: color === "light" ? "white" : "black",
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
}
