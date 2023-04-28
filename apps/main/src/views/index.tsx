import { Box, Container, Divider } from "@mui/joy";
import { ProfileState } from "../components/profileState";
import { ChatView } from "../components/chatView";
import useDesktopQuery from "../hooks/useDesktopQuery";
import { useMemo } from "react";

export function Index() {
  const { isDesktop } = useDesktopQuery();

  const desktopComponent = useMemo(() => {
    if (isDesktop) {
      return (
        <>
          <Divider orientation="vertical" />
          <ProfileState />
        </>
      );
    }
  }, [isDesktop]);

  return (
    <Container>
      <Box
        sx={(theme) => ({
          marginTop: theme.spacing(5),
          background: "#fff",
          display: "flex",
          borderRadius: "20px",
          border: "1px solid #eee",
        })}
      >
        <ChatView />
        {desktopComponent}
      </Box>
    </Container>
  );
}
