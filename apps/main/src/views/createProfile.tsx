import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Input,
  Typography,
} from "@mui/joy";
import { useAtom } from "jotai";
import { tabsIndexAtom } from "../state";
import { nickNameAtom } from "../state/profile";

export function CreateProfile() {
  return (
    <Container
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: theme.spacing(3),
        marginTop: theme.spacing(16),
      })}
    >
      <Typography level="h3">创建形象</Typography>
      <Avatar
        sx={{
          width: "100px",
          height: "100px",
        }}
      >
        创建形象
      </Avatar>
      <Form />
    </Container>
  );
}

function Form() {
  const [_, setTabsIndex] = useAtom(tabsIndexAtom);
  const [nickName, setNickName] = useAtom(nickNameAtom);

  return (
    <Box>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          setTabsIndex(3);
        }}
      >
        <FormControl>
          <Input
            value={nickName}
            onChange={(event) => setNickName(event.target.value)}
            required
            size="lg"
            placeholder="输入昵称"
          />
          <Button
            sx={{
              width: "100%",
            }}
            type="submit"
          >
            提交
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
