import { useState } from "react";

export default function TopMenu() {

    const [shown, setShown] = useState(false);

    const toggleShown = () => {setShown(!shown)};

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Boatplans.cc</a>
                <button className="navbar-toggler" type="button" onClick={toggleShown} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + (shown ? "show" : "")}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Row boat plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sail boat plans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Motor boat plans</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}