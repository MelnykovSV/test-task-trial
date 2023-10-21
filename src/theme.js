import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  textMain: "#121417",
  textSemiLight: "rgba(18, 20, 23, 0.50)",
  textLight: "rgba(18, 20, 23, 0.20)",
  textLightSecondary: "#8A8A89",
  textSecondary: "#363535",
  accentMain: "#3470FF",
  accentDark: "#0B44CD",
  bgMain: "#fff",
  bgSecondary: "#F7F7FB",
  transitions: {
    time: "0.3s",
    cubic: "linear",
  },
});
