import { Container } from "@mui/joy";
import { ReactNode } from "react";

export function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <Container
      maxWidth="xl"
      sx={(theme) => ({
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
      })}
    >
      {children}
    </Container>
  );
}
