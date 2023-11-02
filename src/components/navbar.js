import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-YlnMnBlue navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">mymusiclist</a>

                <form class="d-flex input-group input-group-sm w-auto border-0">
                    <input
                    type="search"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    />
                    <button class="btn btn-outline-light bg-YlnMnLightBlue" type="submit" id="button-addon2"><FontAwesomeIcon icon="fas fa-search" /></button>
                </form>

                <ul class="navbar-nav d-flex flex-row me-1">
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="/#home-section"> Home </a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="/#charts-section"> Charts </a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="/#about-section"> About </a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="/#faqs-section"> FAQs </a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="/#contact-section"> Contact </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon="fas fa-user" /></a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li class="dropdown-item"><Link to="/login"> My Account </Link></li>
                            <li class="dropdown-item"><Link to="/"> Log Out </Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar