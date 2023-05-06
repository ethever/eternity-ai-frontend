import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/joy";

export function AddMoreBtn() {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        placeSelf: "center",
      }}
    >
      <IconButton>
        <AddIcon />
      </IconButton>
    </Box>
  );
}
