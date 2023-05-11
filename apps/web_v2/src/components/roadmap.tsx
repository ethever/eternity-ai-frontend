import { SectionContainer } from "./sectionContainer";
import { SectionTitle } from "./sectionTitle";
import roadMapBg from "../assets/roadmap-bg.png";
import { FullWidthContainer } from "./fullWidthContainer";

export function RoadMap() {
  return (
    <FullWidthContainer
      sx={{
        height: "100vh",
        background: `rgb(14,13,14) url(${roadMapBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center calc(100% + 200px)",
      }}
    >
      <SectionContainer>
        <SectionTitle
          title="Development Roadmap"
          subTitle="开发路线"
          color="light"
        />
      </SectionContainer>
    </FullWidthContainer>
  );
}
