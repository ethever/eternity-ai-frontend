import ImageIcon from "@mui/icons-material/Image";
import { Box, Button, IconButton, Input } from "@mui/joy";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import useDesktopQuery from "../hooks/useDesktopQuery";

export function ChatInputer() {
  const { isDesktop } = useDesktopQuery();
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
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
        sx={{ width: "100%" }}
        size="lg"
        placeholder="请输入文字"
        endDecorator={<Button>发送</Button>}
      />
    </Box>
  );
}

function ButtonGroup() {
  return (
    <Box
      sx={() => ({
        display: "flex",
      })}
    >
      <IconButton variant="plain">
        <ImageIcon />
      </IconButton>
      <IconButton variant="plain">
        <EmojiEmotionsIcon />
      </IconButton>
      <IconButton variant="plain">
        <KeyboardVoiceIcon />
      </IconButton>
    </Box>
  );
}
