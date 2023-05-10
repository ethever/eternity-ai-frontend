import { useMemo } from "react";
import v1 from "../assets/v1.mp4";

import {
  Box,
  Card,
  CardContent,
  CardCover,
  Container,
  Typography,
} from "@mui/joy";
import useMediaQuery from "../hooks/useMediaQuery";
import { useAtom } from "jotai";
import { videoDialogOpenAtom } from "../states";

export function MobileVideoComponent() {
  const [_, setOpen] = useAtom(videoDialogOpenAtom);
  const { md } = useMediaQuery();
  const videoComponent = useMemo(() => {
    if (!md) {
      return (
        <Container
          onClick={() => {
            setOpen(true);
          }}
        >
          <Box
            sx={(theme) => ({
              paddingTop: theme.spacing(2),
            })}
          >
            <Card sx={{ minWidth: 300, flexGrow: 1 }}>
              <CardCover>
                <video
                  preload={"metadata"}
                  // autoPlay
                  loop
                  muted
                  // poster="https://assets.codepen.io/6093409/river.jpg"
                >
                  <source src={v1} type="video/mp4" />
                </video>
              </CardCover>
              <CardContent>
                <Typography
                  level="h6"
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >
                  最新进展
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      );
    }
    return <></>;
  }, [md]);

  return <>{videoComponent}</>;
}
