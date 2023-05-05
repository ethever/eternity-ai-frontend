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
      sx={
        {
          // background: "black",
        }
      }
    >
      <SectionContainer>
        <Box>
          <Typography>Contact Us</Typography>
          <Box>
            <PlainIconButton icon={<TwitterIcon />} />
            <PlainIconButton icon={<InstagramIcon />} />
            <PlainIconButton icon={<FacebookIcon />} />
            <PlainIconButton icon={<LinkedInIcon />} />
            <PlainIconButton icon={<YouTubeIcon />} />
          </Box>
          <Typography>@Eternity.AI</Typography>
        </Box>
      </SectionContainer>
    </Container>
  );
}

function PlainIconButton({ icon }: { icon: ReactNode }) {
  return (
    <IconButton
      onClick={() =>
        darkToast("coming soon", <SentimentVeryDissatisfiedIcon />)
      }
      variant="plain"
    >
      {icon}
    </IconButton>
  );
}
