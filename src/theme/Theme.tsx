import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

const spacing = {
  0: "0px",
  px: "1px",
  "0.5": "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "84px",
  24: "96px",
  28: "112px",
  32: "128px",
};

export const theme = {
  colors: {
    teal: "#01B2BA",
    yellow: "#FEF452",
    purple: "#942F70",
    "dark-blue": "#14597A",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
    "7xl": "72px",
  },
  fontWeight: {
    thin: "100",
    hairline: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    "extra-bold": "800",
    black: "900",
  },
  spacing,
} as const;

export type ITheme = typeof theme;

export const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
