import { Box, Divider, Typography } from "@mui/joy";
import { AvatarAndNickname } from "./avatarAndNickname";
import { ImgSet } from "./imgSet";
import { DocsSet } from "./docsSet";
import { VoiceSet } from "./voiceSet";
import useAppBarHeight from "../hooks/useAppBarHeight";

export function ProfileState() {
  const appbarHeight = useAppBarHeight();

  return (
    <Box
      gridColumn="span 1"
      sx={() => ({
        display: "flex",
        alignItems: "flex-start",
        // width: "100%",
        // width: "max-content",
      })}
    >
      <Divider orientation="vertical" />
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "space-between",
          gap: theme.spacing(2),
          padding: theme.spacing(2),
          position: "sticky",
          top: appbarHeight,
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
