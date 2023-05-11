import { Container } from "@mui/joy";
import { PropsOfComponent } from "../utils/typeTools";

type ContainerProps = PropsOfComponent<typeof Container>;

type WcType = React.ComponentType<ContainerProps>;
const withFullWidthContainer = (Wc: WcType) => (props: ContainerProps) =>
  <Wc {...props} maxWidth={false} />;

export const FullWidthContainer = withFullWidthContainer(Container);
