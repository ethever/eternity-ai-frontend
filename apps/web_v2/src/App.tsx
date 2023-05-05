import { Advantages } from "./components/advantages";
import ResponsiveAppBar from "./components/appBar";
import { Banner } from "./components/banner";
import { Community } from "./components/community";
import { Footer } from "./components/footer";
import { Partner } from "./components/partner";
import { RoadMap } from "./components/roadmap";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Banner />
      <Advantages />
      <RoadMap />
      <Partner />
      <Community />
      <Footer />
    </>
  );
}

export default App;
