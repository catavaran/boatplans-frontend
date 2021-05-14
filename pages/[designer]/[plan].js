import Link from 'next/link';
import Head from 'next/head';
import getConfig from 'next/config';

import ReactMarkdown from 'react-markdown';

import Breadcrumb from '../../components/breadcrumb';
import Layout from '../../components/layout';
import ThumbnailImage from '../../components/thumbnailimage';

import styles from './[plan].module.scss';

export default function PlansByPropulsion({ siteInfo, plan }) {

    const breadcrumb = [
        { url: '/', label: 'Home' },
        { url: '/plans/', label: 'Plans' },
        { url: `/plans/${plan.propulsion.slug}/`, label: plan.propulsion.longName },
        { url: `/plans/${plan.propulsion.slug}/${plan.lengthInterval.slug}`, label: plan.lengthInterval.label },
        { label: plan.name },
    ];

    return (
        <Layout>
            <Head>
                <title>{siteInfo.siteName}</title>
            </Head>
            <Breadcrumb items={breadcrumb} />
            <main>

                <h1><strong>{plan.name}</strong> by <Link href={plan.designer.absoluteUrl} prefetch={false}><a>{plan.designer.name}</a></Link></h1>
                <h2>{plan.tinyDescription}</h2>

                <div className="row">

                    <div className="col-12 col-md-5 order-1 order-md-2 text-center mb-4">
                        <a href={plan.image.original} title={plan.name} target="_blank">
                            <ThumbnailImage image={plan.image} className="img-fluid" alt={plan.name} />
                        </a>
                        {(plan.drawings.length > 0) &&
                            <div className="row mt-3">
                                {plan.drawings.map(drawing =>
                                    <div className="col-6 text-center" key={drawing.image.original}>
                                        <a href={drawing.image.original} title={drawing.title} target="_blank">
                                            <ThumbnailImage image={drawing.image} className="img-fluid" alt={drawing.title} />
                                        </a>
                                        <div className="mt-2 mb-4 lh-1"><small>{drawing.title}</small></div>
                                    </div>
                                )}
                            </div>
                        }
                    </div>

                    <div className="col-12 col-md-7 order-2 order-md-1">

                        <div className={styles.url}>URL: <a href={plan.url}>{plan.url}</a></div>

                        <h3 className="my-3">Description:</h3>
                        <ReactMarkdown children={plan.description} />

                        {(plan.photos.length > 0) &&
                            <>
                                <h3 className="my-3">Photo gallery</h3>
                                <div className="row">
                                    {plan.photos.map(photo =>
                                        <div className="col-12 col-sm-6 col-md-4" key={photo.image.original}>
                                            <a href={photo.image.original} title={photo.title} target="_blank">
                                                <ThumbnailImage image={photo.image} className="img-fluid rounded" alt={photo.title} lazyLoad={true} />
                                            </a>
                                            <div className="mt-2 mb-4 lh-1"><small>{photo.title}</small></div>
                                        </div>
                                    )}
                                </div>
                            </>
                        }

                    </div>

                </div>
            </main>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const { designer, plan } = context.params;

    const { publicRuntimeConfig } = getConfig();
    const res = await fetch(publicRuntimeConfig.BACKEND_URL + `/api/designs/${designer}/${plan}/`);
    if (res.ok) {
        return {
            props: {
                plan: await res.json(),
            },
        }
    }

    return { notFound: true };

}