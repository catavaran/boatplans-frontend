import Head from 'next/head'
import Layout from '../components/layout'

export default function Index({ siteInfo }) {
    return (
        <Layout>
            <Head>
                <title>{siteInfo.siteName}</title>
            </Head>
        </Layout>
    )
}