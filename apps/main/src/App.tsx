import { useMemo } from "react";
import ResponsiveAppBar from "./components/appbar";
import { tabsIndexAtom } from "./state";
import { Index } from "./views";
import { useAtom } from "jotai";
import { CreateProfile } from "./components/createProfile";
import { Container, Typography } from "@mui/joy";

function App() {
  const [tabsIndex] = useAtom(tabsIndexAtom);

  const view = useMemo(() => {
    if (tabsIndex === 3) return <Index />;
    if (tabsIndex === 1) return <CreateProfile />;
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Not implement yet...</Typography>
      </Container>
    );
  }, [tabsIndex]);
  return (
    <>
      <ResponsiveAppBar />
      {view}
    </>
  );
}

export default App;
