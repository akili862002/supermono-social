import MainLayout from "@/layouts/MainLayout/MainLayout";
import GlobalStyle from "@/theme/GlobalStyle";
import { Theme } from "@/theme/Theme";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import "@/config/axios";
import { DefaultSeo } from "next-seo";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo
        title="Supermomos: Socialize and Learn"
        description="Quality connections with verified professionals and industry peers. Socialize with your curated community over unique experiences - At a private dinner salon, rooftop happy hour, pizza party, yacht trip. Or over wine and cheese at an art gallery. Learn from each other - Share success stories, challenges, personal journeys, knowledge. Glean wisdom from each person&#x27;s unique set of expertise. Make networking fun again"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://supermomos.com/",
          site_name: "Supermomos",
          images: [
            {
              url: "/hero-banner.png",
              width: 800,
              height: 600,
              alt: "Supermomos",
            },
          ],
        }}
      />
      <Theme>
        <GlobalStyle />
        <Toaster
          toastOptions={{
            position: "bottom-center",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Theme>
    </QueryClientProvider>
  );
}
