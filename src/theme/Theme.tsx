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
  3.5: "14px",
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
} as const;

const breakpoints = {
  desktop: "1280px",
  laptop: "1024px",
  phone: "640px",
} as const;

type IBreakPoint = typeof breakpoints[keyof typeof breakpoints];

const media = {
  /**'
   * @return `@media (min-${vertical ? "height" : "width"}: ${breakpoint})`,
   */
  up: (breakpoint: IBreakPoint, vertical = false) =>
    `@media (min-${vertical ? "height" : "width"}: ${breakpoint})`,
  down: (breakpoint: IBreakPoint, vertical = false) =>
    `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,
  between: (
    breakpointMin: IBreakPoint,
    breakpointMax: IBreakPoint,
    vertical = false
  ) =>
    `@media (max-${vertical ? "height" : "width"}: ${breakpointMax}) and (min-${
      vertical ? "height" : "width"
    }: ${breakpointMin})`,
};

export const theme = {
  colors: {
    teal: "#01B2BA",
    yellow: "#FEF452",
    purple: "#942F70",
    "dark-blue": "#14597A",
    white: "#FFFFFF",
    black: "#2f2f2f",
    gray1: "#333333",
    primary50: "#F9F5FF",
    gray100: "#F2F4F7",
    gray300: "#D0D5DD",
    gray600: "#475467",
    gray700: "#344054",
    red: "#dc3545",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
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
  shadow: {
    md: "0px 4px 20px rgba(0, 0, 0, 0.1);",
  },
  spacing,
  breakpoints,
  media,
} as const;

export type ITheme = typeof theme;

export const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
