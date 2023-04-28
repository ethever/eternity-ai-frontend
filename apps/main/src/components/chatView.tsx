import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ChatItem } from "./chatItem";
import { Box, Divider } from "@mui/joy";
import { ChatInputer } from "./chatInputer";

const chatData = [
  {
    side: "left",
    data: "我正在考虑买一辆新车，但我不确定哪个品牌和型号适合我。你有什么建议吗？",
  },
  {
    side: "right",
    data: "当然有！首先，你需要考虑你的预算、车辆类型和用途。例如，如果你需要一辆家用轿车，你可以考虑丰田卡罗拉或本田雅阁。",
  },
  {
    side: "left",
    data: "我想要一辆既能上下班又适合周末旅行的车。你有什么建议吗？",
  },
  {
    side: "right",
    data: "如果你需要一辆多功能车型，你可以考虑马自达CX-5或丰田RAV4。它们都是可靠的车型，适合长途旅行和日常使用。",
  },
  {
    side: "right",
    data: "如果你...",
  },
];

function ChatList() {
  return (
    <List>
      {chatData.map((item) => {
        return (
          <ListItem
            key={item.data}
            sx={{
              display: "grid",
              justifyContent: item.side === "right" ? "end" : "start",
            }}
          >
            <ChatItem variant={item.side as any} text={item.data} />
          </ListItem>
        );
      })}
    </List>
  );
}

export function ChatView() {
  return (
    <Box
      sx={(theme) => ({
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      })}
    >
      <ChatList />
      <Divider />
      <ChatInputer />
    </Box>
  );
}
