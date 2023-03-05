import MainLayout from "@/layouts/MainLayout/MainLayout";
import GlobalStyle from "@/theme/GlobalStyle";
import { Theme } from "@/theme/Theme";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "@/config/axios";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <GlobalStyle />
        <Toaster
          toastOptions={{
            position: "bottom-center",
          }}
        />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Theme>
    </QueryClientProvider>
  );
}
