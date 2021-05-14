import Link from 'next/link';

import ThumbnailImage from './thumbnailimage';
import styles from './designcard.module.scss';

export default function DesignCard({ design }) {
    const title = `More info about ${design.name} plan`;
    return (
        <div className="d-flex">
            <div className={styles.image}>
                <Link href={design.absoluteUrl} prefetch={false}>
                    <a title={title}><ThumbnailImage image={design.image} alt={design.name} /></a>
                </Link>
            </div>
            <div className="description ms-3">
                <Link href={design.absoluteUrl} prefetch={false}>
                    <a title={title}><b>{design.name}</b> by {design.designer.name}</a>
                </Link>
                <div className="mt-3">{design.tinyDescription}</div>
                <div className="mt-3">LOA: {design.loa.imperial} / {design.loa.metric}</div>
            </div>
        </div>
    );
}