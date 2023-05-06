import { Avatar, Box, Typography } from "@mui/joy";
import { Title } from "./title";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import docsSetAvatar from "../assets/docsset/Ellipse 28.png";
import { AddMoreBtn } from "./addMoreButton";
import { useAtom } from "jotai";
import { nickNameAtom } from "../state/profile";

function ButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "no-wrap",
      }}
    >
      <WhatsAppIcon fontSize="small" />
      <FacebookIcon fontSize="small" />
      <TwitterIcon fontSize="small" />
    </Box>
  );
}

function DocsItem() {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: "2px",
        border: "1px solid #eee",
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        gap: theme.spacing(2),
        cursor: "pointer",
      })}
    >
      <Avatar src={docsSetAvatar} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography fontSize="small">Katrina821</Typography>
        <Typography
          sx={{
            color: "grey",
          }}
          fontSize="small"
        >
          35分钟前 来自iPhone
        </Typography>
        <Typography fontSize="small">
          就连听歌都是听娜美不存在歌手唱的
        </Typography>
      </Box>
    </Box>
  );
}

export function DocsSet() {
  const [nickName] = useAtom(nickNameAtom);

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1),
      })}
    >
      <Title title={`${nickName} 的文档`} right={<ButtonGroup />} />
      <DocsItem />
      <DocsItem />
      <AddMoreBtn />
    </Box>
  );
}
