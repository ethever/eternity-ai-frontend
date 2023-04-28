import ResponsiveAppBar from "./components/appbar";
import { ProfileState } from "./components/profileState";
import { Index } from "./views";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      {/* <CreateProfile /> */}
      <Index />
    </>
  );
}

export default App;
