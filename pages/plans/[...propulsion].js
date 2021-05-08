import Head from 'next/head';
import getConfig from 'next/config';

import Breadcrumb from '../../components/breadcrumb';
import Layout from '../../components/layout';
import PlanList from '../../components/planlist';
import { humanizeLengthRange } from '../../utils/format';


export default function PlansByPropulsion({ siteInfo, propulsion, lengthMin, lengthMax, plans }) {

    const breadcrumb = [
        { url: '/', label: 'Home' },
        { url: '/plans/', label: 'Plans' },
    ];

    const propulsionInfo = siteInfo.propulsions.filter(p => p.slug == propulsion);
    const propulsionLabel = propulsionInfo.length ? propulsionInfo[0].longName : propulsion;

    if (lengthMin || lengthMax) {
        breadcrumb.push({ url: `/plans/${propulsion}/`, label: propulsionLabel });
        breadcrumb.push({ label: humanizeLengthRange(lengthMin, lengthMax) });
    } else {
        breadcrumb.push({ label: propulsionLabel });
    }

    return (
        <Layout>
            <Head>
                <title>{siteInfo.siteName}</title>
            </Head>
            <Breadcrumb items={breadcrumb} />
            <PlanList plans={plans} />
        </Layout>
    )
}


export async function getServerSideProps(context) {

    const [ propulsion, lengthRange, excessParam ] = context.params.propulsion;
    if (excessParam !== undefined) {
        return { notFound: true };
    }

    const [ lengthMin, lengthMax ] = lengthRange ? lengthRange.split('-') : [];
    const params = {
        propulsion: propulsion,
        loa_min: lengthMin || '',
        loa_max: lengthMax || '',
    };
    const { publicRuntimeConfig } = getConfig();
    const res = await fetch(publicRuntimeConfig.BACKEND_URL + '/api/designs/?' + new URLSearchParams(params));
    if (res.ok) {
        return {
            props: {
                propulsion,
                lengthMin: lengthMin || '',
                lengthMax: lengthMax || '',
                plans: await res.json(),
            },
        }
    }

    return { notFound: true };
}