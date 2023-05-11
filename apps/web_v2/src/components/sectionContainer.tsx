import { Container, styled } from "@mui/joy";
import React from "react";

type Props = typeof Container extends React.ComponentType<infer P> ? P : never;
type WcType = React.ComponentType<Props>;

const withXlWidth = (Wc: WcType) => (props: Props) =>
  <Wc {...props} maxWidth="xl" />;

export const SectionContainer = styled(withXlWidth(Container))(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));
