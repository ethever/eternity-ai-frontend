import ImageIcon from "@mui/icons-material/Image";
import { Box, IconButton, Input } from "@mui/joy";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import useDesktopQuery from "../hooks/useDesktopQuery";
import useMediaQuery from "../hooks/useMediaQuery";

export function ChatInputer() {
  const { isDesktop } = useDesktopQuery();
  const { md } = useMediaQuery();
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: !md ? "column" : "row",
        paddingTop: !md ? 0 : theme.spacing(2),
        paddingBottom: !md ? theme.spacing(1) : theme.spacing(2),
        paddingLeft: isDesktop ? theme.spacing(2) : 0,
        paddingRight: isDesktop ? theme.spacing(2) : 0,
        position: "sticky",
        width: "100%",
        bottom: 0,
        background: "white",
      })}
    >
      <ButtonGroup />
      <Input
        variant="plain"
        sx={{ width: "100%" }}
        size="lg"
        placeholder="请输入文字"
      />
    </Box>
  );
}

function ButtonGroup() {
  const { md } = useMediaQuery();
  return (
    <Box
      sx={(theme) => ({
        p: !md
          ? `${theme.spacing(1)} ${theme.spacing(1)} 0 ${theme.spacing(1)}`
          : 0,
        display: "flex",
      })}
    >
      <IconButton size="sm" variant="plain">
        <ImageIcon />
      </IconButton>
      <IconButton size="sm" variant="plain">
        <EmojiEmotionsIcon />
      </IconButton>
      <IconButton size="sm" variant="plain">
        <KeyboardVoiceIcon />
      </IconButton>
    </Box>
  );
}
