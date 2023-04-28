import { Box, Typography } from "@mui/joy";
import { AvatarAndNickname } from "./avatarAndNickname";
import { ImgSet } from "./imgSet";
import { DocsSet } from "./docsSet";
import { VoiceSet } from "./voiceSet";

export function ProfileState() {
  return (
    <Box
      sx={() => ({
        width: "min-content",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "space-between",
          gap: theme.spacing(2),
          padding: theme.spacing(2),
          position: "sticky",
          top: 0,
        })}
      >
        <AvatarAndNickname />
        <ImgSet />
        <DocsSet />
        <VoiceSet />
        <Typography
          noWrap
          sx={{
            textAlign: "center",
          }}
          fontSize="small"
        >
          以上数据已为你实时永存
        </Typography>
      </Box>
    </Box>
  );
}
