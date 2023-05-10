import { Dialog } from "@mui/material";
import { useAtom } from "jotai";
import { videoDialogOpenAtom } from "../states";

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
      display the video
    </Dialog>
  );
}
