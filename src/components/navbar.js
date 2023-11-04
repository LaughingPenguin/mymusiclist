import React from "react"
import { useReducer } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    function handleClick() {
        forceUpdate();
    }

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate('/', { replace: true });
    }
    if (localStorage.getItem("token") != null) {
        return (
            <nav className="navbar navbar-expand-lg bg-YlnMnBlue navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">mymusiclist</a>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="hamburger">
                        <ul className="navbar-nav d-flex text-center me-auto">
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/" className="nav-link"> Home </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/#charts-section" className="nav-link"> Charts </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/#faqs-section" className="nav-link"> FAQs </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/#contact-section" className="nav-link"> Contact </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/reviews" className="nav-link"> Reviews </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" type="button" onClick={logout}> Log Out </a>
                            </li>
                        </ul>
                        <form className="d-flex input-group input-group-sm w-auto border-0">
                            <input
                            type="search"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            />
                            <button className="btn btn-outline-light bg-YlnMnLightBlue" type="submit" id="button-addon2"><FontAwesomeIcon icon="fas fa-search" /></button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg bg-YlnMnBlue navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">mymusiclist</a>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#hamburger" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="hamburger">
                        <ul className="navbar-nav d-flex text-center me-auto">
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/" className="nav-link"> Home </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/#charts-section" className="nav-link"> Charts </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/#faqs-section" className="nav-link"> FAQs </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/#contact-section" className="nav-link"> Contact </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to="/reviews" className="nav-link"> Reviews </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <LinkContainer to="/login"><a className="nav-link" type="button"> Login/SignUp </a></LinkContainer>
                            </li>
                        </ul>
                        <form className="d-flex input-group input-group-sm w-auto border-0">
                            <input
                            type="search"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            />
                            <button className="btn btn-outline-light bg-YlnMnLightBlue" type="submit" id="button-addon2"><FontAwesomeIcon icon="fas fa-search" /></button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }

}
export default NavBar