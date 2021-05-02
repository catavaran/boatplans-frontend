import '../scss/style.scss'

import App from 'next/app';

import Head from "next/head";
import TopMenu from "../components/topmenu";

function BoatplansApp({ Component, pageProps }) {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#212529" />
        </Head>
        <TopMenu siteInfo={pageProps.siteInfo} />
        <Component {...pageProps} />
    </>
}

BoatplansApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    const siteInfo = {
        siteName: 'Boatplans.cc',
        propulsions: [
            {slug: 'row', longName: 'Row boat plans'},
            {slug: 'sail', longName: 'Sail boat plans'},
            {slug: 'motor', longName: 'Notor boat plans'},
        ],
    };

    appProps.pageProps.siteInfo = siteInfo;

    return {...appProps, siteInfo};
}

export default BoatplansApp;