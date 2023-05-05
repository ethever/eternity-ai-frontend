import { Container } from "@mui/joy";
import { SectionContainer } from "./sectionContainer";
import { SectionTitle } from "./sectionTitle";
import communityBg from "../assets/community-bg.png";
import { Box } from "@mui/joy";
import { Avatar, Typography } from "@mui/joy";

const s = [
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
  {
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.",
    by: "@axe.ar",
  },
];

function Item({
  avatar,
  text,
  author,
}: {
  avatar: string;
  text: string;
  author: string;
}) {
  return (
    <Box
      sx={(theme) => ({
        all: "unset",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "20px",
        gap: theme.spacing(2),
        minWidth: "350px",
        background: "white",
        marginRight: theme.spacing(8),
        padding: theme.spacing(2),
      })}
    >
      <Avatar
        sx={{
          width: "150px",
          height: "150px",
        }}
        src={avatar}
        alt="avatar image"
      />
      <Typography textAlign="center">{text}</Typography>
      <Typography>{author}</Typography>
    </Box>
  );
}

export function Community() {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${communityBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#e4e4e4",
      }}
    >
      <SectionContainer>
        <SectionTitle
          title="Community Impact"
          subTitle="社区影响"
          color="dark"
        />
        <Box
          sx={(theme) => ({
            marginTop: theme.spacing(2),
            display: "flex",
            wrap: "nowrap",
            flexShrink: 0,
            overflowX: "scroll",
          })}
        >
          {s.map((i) => (
            <Item
              key={i.text}
              avatar={i.avatarUrl}
              text={i.text}
              author={i.by}
            />
          ))}
        </Box>
      </SectionContainer>
    </Container>
  );
}
