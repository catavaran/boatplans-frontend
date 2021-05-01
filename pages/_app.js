import '../scss/style.scss'

import Head from "next/head";
import TopMenu from "../components/topmenu";

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <TopMenu />
        <Component {...pageProps} />
    </>

}
