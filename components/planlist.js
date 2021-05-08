import Link from 'next/link';

import styles from './planlist.module.scss';

function PlanRow({ plan }) {
    const title = `More info about ${plan.name} plan`;
    return (
        <tr>
            <td className={styles.image}>
                <Link href={plan.absoluteUrl}>
                    <a title={title}><img src={plan.image} alt={plan.name} /></a>
                </Link>
            </td>
            <td>
                <Link href={plan.absoluteUrl}>
                    <a title={title}><b>{plan.name}</b> by {plan.designer.name}</a>
                </Link>
                <div className="mt-2">{plan.tinyDescription}</div>
            </td>
            <td className="text-nowrap">
                {plan.loa.imperial}<br />
                {plan.loa.metric}
            </td>
            <td className="text-nowrap">
                {plan.beam.imperial}<br />
                {plan.beam.metric}
            </td>
            <td className="text-nowrap">
                {plan.sailArea && plan.sailArea.imperial}<br />
                {plan.sailArea && plan.sailArea.metric}
            </td>
            <td className="text-nowrap">
                {plan.horsePower || '-'}
            </td>

        </tr>
    );
}

export default function PlanList({ plans }) {
    return (
        <div className="table-responsive">
            <table className="table">
                <tbody>
                    {plans.map(plan => <PlanRow plan={plan} key={plan.slug} />)}
                </tbody>
            </table>
        </div>
    );
}