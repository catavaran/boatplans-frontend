import Head from 'next/head'
import getConfig from 'next/config';

import Breadcrumb from '../../components/breadcrumb';
import DesignCard from '../../components/designcard';
import Layout from '../../components/layout';
import PropulsionLinks from '../../components/propulsionlinks';


function RecentDesignsTable({ recentDesigns }) {
    return (
        <table className="table table-bordered">
            <tbody>
                {recentDesigns.map(design =>
                    <tr key={design.slug} ><td><DesignCard design={design} /></td></tr>
                )}
            </tbody>
        </table>
    );
}

export default function Plans({ siteInfo, recentDesigns }) {
    const breadcrumb = [
        { url: '/', label: 'Home' },
        { label: 'Plans' },
    ];
    return (
        <Layout>
            <Head>
                <title>{siteInfo.siteName}</title>
            </Head>

            <div className="container-fluid">

                <Breadcrumb items={breadcrumb} />

                <h1 className="mb-3">Boat plans for amateur boat building</h1>

                <div className="row">
                    {siteInfo.propulsions.map(propulsion =>
                        <div className="col-md-4 mb-3" key={propulsion.slug}>
                            <PropulsionLinks propulsion={propulsion} />
                        </div>
                    )}
                </div>

                <h2 className="mb-3">Recently added boat plans</h2>

                <div className="row">
                    {recentDesigns.map(recentDesignsInfo =>
                        <div className="col-md-4 mb-3" key={recentDesignsInfo.propulsion.slug}>
                            <RecentDesignsTable recentDesigns={recentDesignsInfo.recent} />
                        </div>
                    )}
                </div>

            </div>

        </Layout>
    )
}

export async function getServerSideProps(context) {

    let recentDesigns = {};
    const { publicRuntimeConfig } = getConfig();
    const res = await fetch(publicRuntimeConfig.BACKEND_URL + '/api/designs/recent/');
    if (res.ok) {
        recentDesigns = await res.json();
    }
    return {
        props: { recentDesigns },
    }
}
