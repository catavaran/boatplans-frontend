import Head from 'next/head';
import getConfig from 'next/config';

import Breadcrumb from '../../components/breadcrumb';
import Layout from '../../components/layout';


export default function PlansByPropulsion({ siteInfo, propulsion }) {

    const breadcrumb = [
        { url: '/', label: 'Home' },
        { url: '/plans/', label: 'Plans' },
        { label: propulsion ? propulsion[0] : '' }
    ];
    return (
        <Layout>
            <Head>
                <title>{siteInfo.siteName}</title>
            </Head>
            <Breadcrumb items={breadcrumb} />
        </Layout>
    )
}


export async function getServerSideProps(context) {
    const { publicRuntimeConfig } = getConfig();
    const res = await fetch(publicRuntimeConfig.BACKEND_URL + '/api/site-info/');
    return {
        props: {
            propulsion: context.params.propulsion,
        },
    }
}