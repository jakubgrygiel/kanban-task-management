import "@/styles/globals.css";
import { createGlobalStyle } from "styled-components";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DarkModeCtxProvider } from "@/context/DarkModeCtx";
import ThemeProviderCustom from "@/providers/ThemeProviderCustom";
import { ModalsCtxProvider } from "@/context/ModalsCtx";
import { DataCtxProvider } from "@/context/DataCtx";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
      margin:0;
      padding:0;
      box-sizing: border-box;
    }
    body,button,input,textarea {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700;
      font-size: 16px;
      color: hsla(0, 0%,0%, 1);
      background-color: hsla(220, 69%, 97%, 1)
    }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Task Management App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeCtxProvider>
        <ThemeProviderCustom>
          <DataCtxProvider>
            <ModalsCtxProvider>
              <Component {...pageProps} />
            </ModalsCtxProvider>
          </DataCtxProvider>
        </ThemeProviderCustom>
      </DarkModeCtxProvider>
    </>
  );
}
