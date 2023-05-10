import { Advantages } from "./components/advantages";
import ResponsiveAppBar from "./components/appBar";
import { Banner } from "./components/banner";
import { Community } from "./components/community";
import { Footer } from "./components/footer";
import { Partner } from "./components/partner";
import { RoadMap } from "./components/roadmap";
import { MobileVideoComponent } from "./components/mobileVideoPlaceHolder";
import { VideoDialog } from "./components/videoDialog";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Banner />
      <MobileVideoComponent />
      <Advantages />
      <RoadMap />
      <Partner />
      <Community />
      <Footer />
      <VideoDialog />
    </>
  );
}

export default App;
