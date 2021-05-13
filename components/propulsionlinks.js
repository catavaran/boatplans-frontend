import { addBasePath } from 'next/dist/next-server/lib/router/router';
import Link from 'next/link';

export function PropulsionLengthLink({ propulsion, slug, label }) {
    return (
        <>
            <Link
                href={{
                    pathname: '/plans/[propulsion]/[length]/',
                    query: { propulsion: propulsion.slug, length: slug },
                }}
                prefetch={false}
            >
                <a className="me-3 text-nowrap">{label}</a>
            </Link>
            {' '}
        </>
    );
}

export default function PropulsionLinks({ propulsion }) {
    return (
        <>
            <h2>
                <Link
                    href={{
                        pathname: '/plans/[propulsion]/',
                        query: { propulsion: propulsion.slug },
                    }}
                    prefetch={false}
                >
                    <a>{propulsion.longName}</a>
                </Link>
            </h2>
            <div style={{lineHeight: 1.7}}>
                {propulsion.lengths.map(length =>
                    <PropulsionLengthLink propulsion={propulsion} slug={length.slug} label={length.label} key={length.slug} />)
                }
            </div>
        </>
    );

}