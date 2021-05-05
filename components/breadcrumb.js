import Link from 'next/link'


function BreadcrumbItem({ url, label }) {
    if (url) {
        return <li className="breadcrumb-item"><Link href={url}><a>{label}</a></Link></li>;
    }
    return <li className="breadcrumb-item active" aria-current="page">{label}</li>;
}

export default function Breadcrumb({ items }) {

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map(item =>
                    <BreadcrumbItem url={item.url} label={item.label} key={item.label} />
                )}
            </ol>
        </nav>
    )
}