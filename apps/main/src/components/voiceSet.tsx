import { Box } from "@mui/joy";
import { Title } from "./title";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { ReactNode } from "react";
import { AddMoreBtn } from "./addMoreButton";
import { useAtom } from "jotai";
import { nickNameAtom } from "../state/profile";

function Item({ icon }: { icon: ReactNode }) {
  return (
    <Box
      sx={{
        background: "#eee",
        width: 80,
        height: 80,
        display: "grid",
        placeContent: "center",
      }}
    >
      {icon}
    </Box>
  );
}
export function VoiceSet() {
  const [nickName] = useAtom(nickNameAtom);

  return (
    <Box>
      <Title title={`${nickName} 的音频`} />
      <Box
        sx={(theme) => ({
          display: "flex",
          gap: theme.spacing(1),
        })}
      >
        <Item icon={<MusicNoteIcon />} />
        <Item icon={<MusicNoteIcon />} />
        <Item icon={<MusicNoteIcon />} />
        <Item icon={<AddMoreBtn />} />
        {/* <AddMoreBtn /> */}
      </Box>
    </Box>
  );
}
