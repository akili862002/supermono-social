import MainLayout from "@/layouts/MainLayout/MainLayout";
import GlobalStyle from "@/theme/GlobalStyle";
import { Theme } from "@/theme/Theme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Theme>
  );
}
