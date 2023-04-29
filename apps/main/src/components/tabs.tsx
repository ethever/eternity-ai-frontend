import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { Box } from "@mui/joy";
import { useAtom } from "jotai";
import { tabsIndexAtom } from "../state";

export default function TabsIconWithText() {
  const [tabsIndex, setTabsIndex] = useAtom(tabsIndexAtom);

  const handleChange = (_event: any, value: any) => {
    setTabsIndex(value as number);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        aria-label="Icon tabs"
        defaultValue={3}
        onChange={handleChange}
        value={tabsIndex}
        sx={{
          mb: 2,
          borderRadius: "lg",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <TabList>
          <Tab>ConnectWallet</Tab>
          <Tab>SetNickname</Tab>
          <Tab>InviteCode</Tab>
          <Tab>Index</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}
