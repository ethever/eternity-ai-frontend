import { SectionContainer } from "./sectionContainer";
import { SectionTitle } from "./sectionTitle";
import p1 from "../assets/logos/1.png";
import p2 from "../assets/logos/2.png";
import p3 from "../assets/logos/3.png";
import p4 from "../assets/logos/4.png";
import p5 from "../assets/logos/5.png";
import p6 from "../assets/logos/6.png";
import p7 from "../assets/logos/7.png";
import p8 from "../assets/logos/8.png";
import p9 from "../assets/logos/9.png";
import p10 from "../assets/logos/10.png";
import p11 from "../assets/logos/11.png";
import p12 from "../assets/logos/12.png";
import p13 from "../assets/logos/13.png";
import p14 from "../assets/logos/14.png";
import p15 from "../assets/logos/15.png";
import { Box } from "@mui/joy";
import useMediaQuery from "../hooks/useMediaQuery";

const logos = () => {
  const t = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];

  return t;
};

function Item({ logo }: { logo: string }) {
  const { md } = useMediaQuery();

  return (
    <Box
      sx={{
        cursor: "pointer",
        filter: "grayscale(1)",
        "&:hover": {
          filter: "grayscale(0)",
        },
      }}
    >
      <img
        style={{
          maxWidth: !md ? "150px" : "unset",
        }}
        src={logo}
        alt="logo image"
      />
    </Box>
  );
}

export function Partner() {
  return (
    <SectionContainer>
      <SectionTitle
        title="Cooperative Partner"
        subTitle="社区影响"
        color="dark"
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: theme.spacing(2),
        })}
      >
        {logos().map((logo) => (
          <Item key={logo} logo={logo} />
        ))}
      </Box>
    </SectionContainer>
  );
}
