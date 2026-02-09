import { GetServerSidePropsContext } from "next";
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import "../styles/global.css";
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { rtlCache } from "../../rtl-cache";
import Layout from "../components/layout";
import AOS from "aos";
import "aos/dist/aos.css";

const THEME_COOKIES = "mantine-color-scheme";
export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme,
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie(THEME_COOKIES, nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [colorScheme]);

  return (
    <>
      <Head>
        <title>Pascoal Kahamba</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/developer-photo.jpg" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
          emotionCache={rtlCache}
        >
          <NotificationsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie(THEME_COOKIES, ctx) || "light",
});
