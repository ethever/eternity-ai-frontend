import { Box, Container } from "@mui/joy";
import { ProfileState } from "../components/profileState";
import { ChatView } from "../components/chatView";
import useDesktopQuery from "../hooks/useDesktopQuery";
import { useMemo } from "react";

export function Index() {
  const { isDesktop } = useDesktopQuery();

  const desktopComponent = useMemo(() => {
    if (isDesktop) {
      return <ProfileState />;
    }
  }, [isDesktop]);

  if (!isDesktop) {
    return <ChatView />;
  }

  return (
    <Container>
      <Box
        gridTemplateColumns="repeat(3, 1fr)"
        sx={(theme) => ({
          marginTop: theme.spacing(5),
          background: "#fff",
          display: "grid",
          borderRadius: "15px",
          border: "1px solid #eee",
        })}
      >
        <ChatView />
        {desktopComponent}
      </Box>
    </Container>
  );
}
