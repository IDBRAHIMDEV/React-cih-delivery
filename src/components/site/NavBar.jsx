import React from 'react'

const NavBar = () => {
  return (
    <>
        <nav
            className="navbar navbar-expand-sm navbar-dark bg-warning"
        >
            <div className="container">
                <a className="navbar-brand" href="''">CIH Bank</a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="''" aria-current="page"
                                >Home
                                <span className="visually-hidden">(current)</span></a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="''">Link</a>
                        </li>
                       
                    </ul>
                   
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default NavBar