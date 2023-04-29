import List from "@mui/joy/List";
import { ChatItem, ChatItemType } from "./chatItem";
import { Box, Divider } from "@mui/joy";
import { ChatInputer } from "./chatInputer";

const chatData: ChatItemType[] = [
  {
    side: "left",
    data: "我正在考虑买一辆新车，但我不确定哪个品牌和型号适合我。你有什么建议吗？",
    type: "text",
  },
  {
    side: "right",
    data: "当然有！首先，你需要考虑你的预算、车辆类型和用途。例如，如果你需要一辆家用轿车，你可以考虑丰田卡罗拉或本田雅阁。",
    type: "text",
  },
  {
    type: "time",
    data: new Date().toISOString(),
  },
  {
    side: "left",
    data: "我想要一辆既能上下班又适合周末旅行的车。你有什么建议吗？",
    type: "text",
  },
  {
    type: "text",
    side: "left",
    data: "我想要一辆既能上下班又适合周末旅行的车。你有什么建议吗？",
  },
  {
    type: "text",
    side: "right",
    data: "如果你需要一辆多功能车型，你可以考虑马自达CX-5或丰田RAV4。它们都是可靠的车型，适合长途旅行和日常使用。",
  },
  {
    type: "time",
    data: new Date().toISOString(),
  },
  {
    type: "text",
    side: "right",
    data: "如果你需要一辆多功能车型，你可以考虑马自达CX-5或丰田RAV4。它们都是可靠的车型，适合长途旅行和日常使用。",
  },
  {
    type: "text",
    side: "left",
    data: "我想要一辆既能上下班又适合周末旅行的车。你有什么建议吗？",
  },
  {
    type: "text",
    side: "right",
    data: "如果你需要一辆多功能车型，你可以考虑马自达CX-5或丰田RAV4。它们都是可靠的车型，适合长途旅行和日常使用。",
  },
  {
    type: "text",
    side: "left",
    data: "我想要一辆既能上下班又适合周末旅行的车。你有什么建议吗？",
  },

  {
    type: "text",
    side: "left",
    data: "我想要一辆既能上下班又适合周末旅行的车。你有什么建议吗？",
  },
  {
    type: "text",
    side: "right",
    data: "如果你需要一辆多功能车型，你可以考虑马自达CX-5或丰田RAV4。它们都是可靠的车型，适合长途旅行和日常使用。",
  },
  {
    type: "text",
    side: "left",
    data: "我想要一辆既能上下班又适合周末旅行的车。你有什么建议吗？",
  },
  {
    type: "text",
    side: "right",
    data: "如果你需要一辆多功能车型，你可以考虑马自达CX-5或丰田RAV4。它们都是可靠的车型，适合长途旅行和日常使用。",
  },
  {
    type: "text",
    side: "left",
    data: "我想要一辆既能上下班又适合周末旅行的车。你有什么建议吗？",
  },
  {
    type: "text",
    side: "right",
    data: "如果你需要一辆多功能车型，你可以考虑马自达CX-5或丰田RAV4。它们都是可靠的车型，适合长途旅行和日常使用。",
  },
  {
    side: "right",
    type: "text",
    data: "如果你...",
  },
  {
    side: "left",
    type: "voice",
    // should be binary data here
    data: "dsaokdsaokdsaok",
  },
  {
    side: "left",
    type: "text",
    data: "😢",
  },
  { side: "right", data: "😆😉", type: "text" },
  {
    side: "right",
    type: "text",
    data: "乐",
  },
];

function ChatList() {
  return (
    <List
      sx={(theme) => ({
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(5),
      })}
    >
      {chatData.map((item, index) => {
        return <ChatItem key={`${item.data}${index}`} {...item} />;
      })}
    </List>
  );
}

export function ChatView() {
  return (
    <Box
      gridColumn="span 2"
      sx={() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
      })}
    >
      <ChatList />
      <Divider />
      <ChatInputer />
    </Box>
  );
}
