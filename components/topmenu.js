import { useState } from "react";

import Link from 'next/link'

export default function TopMenu({ siteInfo }) {

    const [shown, setShown] = useState(false);

    const toggleShown = () => { setShown(!shown) };
    const hideMenu = () => { setShown(false); };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
            <div className="container-fluid">

                <Link href="/">
                    <a className="navbar-brand">{siteInfo.siteName}</a>
                </Link>

                <button className="navbar-toggler" type="button" onClick={toggleShown} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse " + (shown ? "show" : "")}>

                    <ul className="navbar-nav me-auto">
                        {siteInfo.propulsions.map(propulsion =>
                            <li className="nav-item" key={propulsion.slug}>
                                <Link
                                    href={{
                                        pathname: '/plans/[propulsion]/',
                                        query: { propulsion: propulsion.slug },
                                    }}
                                    prefetch={false}
                                >
                                    <a onClick={hideMenu} className="nav-link" >{propulsion.longName}</a>
                                </Link>
                            </li>
                        )}
                    </ul>

                </div>

            </div>
        </nav>
    )
}