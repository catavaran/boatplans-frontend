import Head from 'next/head'

import Breadcrumb from '../../components/breadcrumb';
import Layout from '../../components/layout';


export default function Plans({ siteInfo }) {
    const breadcrumb = [
        {url: '/', label: 'Home'},
        {label: 'Plans'},
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
