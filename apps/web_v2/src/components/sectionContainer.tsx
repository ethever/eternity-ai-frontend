import { Container, styled } from "@mui/joy";
import React from "react";
import { PropsOfComponent } from "../utils/typeTools";

type ContainerProps = PropsOfComponent<typeof Container>;

type WcType = React.ComponentType<ContainerProps>;

const withXlWidth = (Wc: WcType) => (props: ContainerProps) =>
  <Wc {...props} maxWidth="xl" />;

export const SectionContainer = styled(withXlWidth(Container))(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));
