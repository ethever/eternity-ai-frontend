import { ReactNode, useMemo } from "react";
import ResponsiveAppBar from "./components/appbar";
import { tabsIndexAtom } from "./state";
import { Index } from "./views";
import { useAtom } from "jotai";
import { CreateProfile } from "./views/createProfile";
import { Container, Typography } from "@mui/joy";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [tabsIndex] = useAtom(tabsIndexAtom);

  const view = useMemo(() => {
    if (tabsIndex === 3)
      return (
        <MotionWraper key="3">
          <Index />
        </MotionWraper>
      );
    if (tabsIndex === 1)
      return (
        <MotionWraper key="1">
          <CreateProfile />
        </MotionWraper>
      );
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
      <AnimatePresence>{view}</AnimatePresence>
    </>
  );
}

function MotionWraper({ key, children }: { key: string; children: ReactNode }) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default App;
