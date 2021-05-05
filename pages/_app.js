import '../scss/style.scss'

import App from 'next/app';
import getConfig from 'next/config';

import Head from "next/head";
import TopMenu from "../components/topmenu";

function BoatplansApp({ Component, pageProps }) {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#212529" />
        </Head>
        <TopMenu siteInfo={pageProps.siteInfo} />
        <div className="container-fluid">
            <Component {...pageProps} />
        </div>
    </>
}

BoatplansApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    const { publicRuntimeConfig } = getConfig();
    const res = await fetch(publicRuntimeConfig.BACKEND_URL + '/api/site-info/');
    if (res.ok) {
        appProps.pageProps.siteInfo = await res.json();
    } else {
        appProps.pageProps.siteInfo = {
            siteName: 'Boatplans',
            propulsions: [],
        };
    }

    return appProps;
}

export default BoatplansApp;