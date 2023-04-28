import { Box, ListItem, Typography } from "@mui/joy";
import useAppBarHeight from "../hooks/useAppBarHeight";
import { ReactNode, useEffect } from "react";
import { Wave } from "./wave.svg";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

export type ChatItemType = {
  side?: ChatItemSideType;
  type: ChatItemDataType;
  data: string;
};

export type ChatItemSideType = "right" | "left";
export type ChatItemDataType = "time" | "text" | "video" | "voice";

export function ChatItem(props: ChatItemType) {
  const { side, type, data } = props;

  if (type === "time") {
    return (
      <ListItem
        sx={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Typography
          fontSize="small"
          sx={(theme) => ({
            padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
            backgroundColor: "#00000055",
            borderRadius: "3px",
            color: "#fff",
          })}
        >
          {data}
        </Typography>
      </ListItem>
    );
  }

  if (!side) {
    return <>{data}</>;
  }

  return (
    <SideSelector side={side}>
      {type === "text" ? (
        <TextBox side={side} text={data} />
      ) : (
        <VoiceBox side={side} data={data}></VoiceBox>
      )}
    </SideSelector>
  );
}

function VoiceBox({ side, data }: { side: ChatItemSideType; data: string }) {
  useEffect(() => console.error({ data }), [data]);

  return (
    <Message side={side}>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <PlayCircleFilledIcon
          sx={{
            color: "white",
          }}
        />

        <Wave width={50} color="white" />
        <Typography
          sx={{
            color: "white",
          }}
        >
          60:00
        </Typography>
      </Box>
    </Message>
  );
}

function TextBox({ side, text }: { side: ChatItemSideType; text: string }) {
  return (
    <Message side={side}>
      <Typography
        sx={{
          color: side === "right" ? "#000" : "#fff",
        }}
      >
        {text}
      </Typography>
    </Message>
  );
}

function Message({
  side,
  children,
}: {
  side: ChatItemSideType;
  children: ReactNode;
}) {
  if (side === "right") return <RightMessage>{children}</RightMessage>;
  if (side === "left") return <LeftMessage>{children}</LeftMessage>;
  return <></>;
}

function LeftMessage({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: "10px 10px 10px 0",
        border: "none",
        padding: theme.spacing(1),
        background: theme.palette.primary[500],
        display: "flex",
        alignItems: "center",
      })}
    >
      {children}
    </Box>
  );
}

function RightMessage({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: "10px 10px 0 10px",
        border: "1px solid #eee",
        padding: theme.spacing(1),
        background: "white",
        display: "flex",
        alignItems: "center",
      })}
    >
      {children}
    </Box>
  );
}

function SideSelector({
  children,
  side,
}: {
  children: ReactNode;
  side?: ChatItemSideType;
}) {
  return (
    <ListItem
      sx={{
        display: "grid",
        justifyContent: side === "right" ? "end" : "start",
      }}
    >
      {children}
    </ListItem>
  );
}
