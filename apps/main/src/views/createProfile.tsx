import { Avatar, Box, Button, Container, Input, Typography } from "@mui/joy";

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
        }}
      >
        <Input size="lg" placeholder="输入昵称" />
        <Button
          sx={{
            width: "100%",
          }}
          type="submit"
        >
          提交
        </Button>
      </form>
    </Box>
  );
}
