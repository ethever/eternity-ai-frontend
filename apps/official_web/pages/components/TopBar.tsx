import * as React from "react";
import { Navbar, Button, Link } from "@nextui-org/react";
import {
  advantagesId,
  firstSectionId,
  partnerId,
  roadmapId,
} from "../../src/constants";
import { LogoText } from "./logo";

const collapseItems = [
  {
    title: "首页",
    href: firstSectionId,
  },
  {
    title: "特色",
    href: advantagesId,
  },
  {
    title: "开发路线",
    href: roadmapId,
  },
  {
    title: "合作伙伴",
    href: partnerId,
  },
  {
    title: "社区",
    href: "#",
  },
];

function AppBar() {
  return (
    <Navbar
      css={{
        position: "fixed",
        top: 0,
      }}
      maxWidth="fluid"
      disableShadow
      variant="static"
    >
      <Navbar.Brand>
        <Navbar.Toggle
          css={{
            marginRight: "10px",
          }}
          showIn="xs"
          aria-label="toggle navigation"
        />
        <LogoText />
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="default">
        {collapseItems.map((item) => (
          <Navbar.Link as={Link} key={item.title} href={`#${item.href}`}>
            {item.title}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <DappButton />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem key={item.title}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={`#${item.href}`}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

function DappButton() {
  const handleClick = () => {
    window.open("http://localhost:5173");
  };
  return (
    <Button auto as={Link} onClick={handleClick} color="primary">
      Launch DAPP
    </Button>
  );
}

export default AppBar;
