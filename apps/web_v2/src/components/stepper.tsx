import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled, useTheme } from "@mui/joy";
import { CenteredBox } from "./centeredBox";
import { CenteredTypography } from "./centeredTypography";
import useMediaQuery from "../hooks/useMediaQuery";

const steps = [
  {
    title: "第一阶段",
    content: `思维文件系统（Mindfile）
    永久存储下来的一个人的数字化信息,例如某人记忆，性格和形象。社交媒体发文、存储的媒体信息以及其他与人的生命有关的数据,
    这意味着人类可以留下一个永恒的记忆，让后人能够了解我们的文化、思想和价值观。`,
    state: "——开发完成",
  },
  {
    title: "第二阶段:",
    content:
      "思维软件（Mindware） 能够作为人造意识操作系统的软件，包括从思维文件中提取该文件主体的人格，并通软件设置复制这一人格。创造出属于每个人的AI助手，提高人类的生产力和生活质量；将促进人类对于意识和灵魂本质的探索和理解，有助于推动哲学、心理学等领域的发展。",
    state: "——持续开发中",
  },
  {
    title: "第三阶段 ",
    content: `数字永生（Eternity AI）最终我们将能够访问构成我们记忆，技能和人格的大脑信息，进入碳基和硅基的思维双胞胎阶段。这一场景将在21世纪40年代实现。不朽的意识，告别肉体凡胎，数字永生，直到时间尽头……`,
    state: "",
  },
];

const WhiteTypo = styled(CenteredTypography)({
  color: "white",
});

const ColumnedCenteredBox = styled(CenteredBox)({
  flexDirection: "column",
});

function Item({
  title,
  content,
  state,
  isActive,
}: {
  title: string;
  content: string;
  state: string;
  isActive: boolean;
}) {
  const theme = useTheme();
  const color = !isActive ? theme.palette.neutral[400] : "white";

  return (
    <ColumnedCenteredBox
      maxWidth="400px"
      sx={{
        placeSelf: "center",
      }}
    >
      <WhiteTypo sx={{ color }}>{title}</WhiteTypo>
      <WhiteTypo sx={{ color }}>{content}</WhiteTypo>
      <WhiteTypo
        sx={(theme) => ({
          color: theme.palette.neutral[600],
          placeSelf: "flex-end",
        })}
      >
        {state}
      </WhiteTypo>
    </ColumnedCenteredBox>
  );
}

export function MStepper() {
  const activeStep = 1;
  const { sm } = useMediaQuery();

  return (
    <CenteredBox>
      <Stepper
        alternativeLabel
        orientation={!sm ? "vertical" : "horizontal"}
        activeStep={activeStep}
      >
        {steps.map((s, index) => (
          <Step
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StepLabel>
              <Item {...s} isActive={index >= activeStep} />
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </CenteredBox>
  );
}
