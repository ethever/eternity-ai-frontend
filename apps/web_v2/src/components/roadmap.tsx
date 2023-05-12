import { SectionContainer } from "./sectionContainer";
import { SectionTitle } from "./sectionTitle";
import roadMapBg from "../assets/roadmap-bg.png";
import { FullWidthContainer } from "./fullWidthContainer";
import { MStepper } from "./stepper";

export function RoadMap() {
  return (
    <FullWidthContainer
      sx={{
        background: `rgb(14,13,14) url(${roadMapBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center calc(100% + 200px)",
      }}
    >
      <SectionContainer
        sx={(theme) => ({
          gap: theme.spacing(10),
          display: "flex",
          flexDirection: "column",
        })}
      >
        <SectionTitle
          title="Development Roadmap"
          subTitle="开发路线"
          color="light"
        />
        <MStepper />
      </SectionContainer>
    </FullWidthContainer>
  );
}
