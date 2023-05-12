import { Dialog } from "@mui/material";
import { useAtom } from "jotai";
import { videoDialogOpenAtom } from "../states";
import videoSrc from "../assets/v1.mp4";
import Player from "griffith";

const sources = {
  hd: {
    play_url: videoSrc,
  },
};

export function VideoDialog() {
  const [videoDialogOpen, setVideoDialogOpen] = useAtom(videoDialogOpenAtom);
  const handleClose = () => {
    setVideoDialogOpen(false);
  };

  return (
    <Dialog
      open={videoDialogOpen}
      onClose={handleClose}
      aria-labelledby="video-dialog-title"
      aria-describedby="video-dialog-description"
    >
      <Player sources={sources} id="player1" />
    </Dialog>
  );
}
