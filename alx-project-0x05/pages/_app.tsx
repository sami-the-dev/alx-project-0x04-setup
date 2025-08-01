import Layout from "@/components/layouts/Layout";
import CounterProvider from "@/context/CountContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CounterProvider>
  );
}
