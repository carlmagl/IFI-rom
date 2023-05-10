import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    </Layout>
  );
}
