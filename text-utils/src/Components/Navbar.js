function Navbar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-primary'>
                <div className="container-fluid">
                    <a className="navbar-brand fs-3 text-light" href="/">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item fs-5">
                                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item fs-5 ">
                                <a className="nav-link active text-light" href="/">Features</a>
                            </li>
                            <li className="nav-item fs-5">
                                <a className="nav-link active text-light" href="/">Pricing</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                                <label className="form-check-label text-light" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;