import React from "react"
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
                        <a class="nav-link" href="#"> Home </a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="#"> Charts </a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="#"> About </a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="#"> FAQs </a>
                    </li>
                    <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="#"> Contact </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon="fas fa-user" /></a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">My Account</a></li>
                            <li><a class="dropdown-item" href="#">Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar