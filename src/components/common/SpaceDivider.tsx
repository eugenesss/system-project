import { styled } from "@mui/material/styles";

interface SpaceDividerProps {
  spacing: number;
}

const SpaceDivider = styled("div", {
  shouldForwardProp: (props: string) => props !== "spacing",
})<SpaceDividerProps>(
  ({ theme, spacing }) => `
padding-top: ${theme.spacing(spacing)}
`
);

export default SpaceDivider;
