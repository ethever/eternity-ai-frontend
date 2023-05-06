import { Container } from "@mui/joy";
import { SectionContainer } from "./sectionContainer";
import { Typography } from "@mui/joy";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/joy";
import { IconButton } from "@mui/joy";
import { ReactNode } from "react";
import { darkToast } from "../utils";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export function Footer() {
  return (
    <Container
      maxWidth={false}
      sx={{
        background: "black",
      }}
    >
      <Container
        sx={(theme) => ({
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(8),
        })}
      >
        <Box>
          <Typography sx={{ color: "white" }}>FIND US HERE:</Typography>
          <Box>
            <PlainIconButton icon={<TwitterIcon fontSize="large" />} />
            <PlainIconButton icon={<InstagramIcon fontSize="large" />} />
            <PlainIconButton icon={<FacebookIcon fontSize="large" />} />
            <PlainIconButton icon={<LinkedInIcon fontSize="large" />} />
            <PlainIconButton icon={<YouTubeIcon fontSize="large" />} />
          </Box>
          <Typography
            sx={(theme) => ({
              color: "white",
              marginTop: theme.spacing(12),
            })}
          >
            @Eternity.AI
          </Typography>
        </Box>
      </Container>
    </Container>
  );
}

function PlainIconButton({ icon }: { icon: ReactNode }) {
  return (
    <IconButton
      onClick={() =>
        darkToast("coming soon", <SentimentVeryDissatisfiedIcon />)
      }
      size="lg"
      variant="plain"
    >
      {icon}
    </IconButton>
  );
}
