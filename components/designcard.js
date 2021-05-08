import Link from 'next/link';

import styles from './designcard.module.scss';

export default function DesignCard({ design }) {
    const title = `More info about ${design.name} plan`;
    return (
        <div className="d-flex">
            <div className={styles.image}>
                <Link href={design.absoluteUrl}>
                    <a title={title}><img src={design.image} alt={design.name} /></a>
                </Link>
            </div>
            <div className="description ms-3">
                <Link href={design.absoluteUrl}>
                    <a title={title}><b>{design.name}</b> by {design.designer.name}</a>
                </Link>
                <div>{design.tinyDescription}</div>
                <div className="mt-3">LOA: {design.loa.imperial} / {design.loa.metric}</div>
            </div>
        </div>
    );
}