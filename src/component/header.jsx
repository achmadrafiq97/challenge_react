import React from 'react';
// import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return  (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <a className="header-logo">
                            <img src={require("../assets-final-project-fe/logo-ALTA@2x.png")} alt=""/>
                        </a>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-5">
                        <div className="header-nav">
                            <ul className="header-nav__list list-unstyled">
                                <li>
                                    <a href="">HOME</a>
                                </li>
                                <li>
                                    <a href="">ABOUT</a>
                                </li>
                                <li>
                                    <a href="">EXPERIENCE</a>
                                </li>
                                <li>
                                    <a href="">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header> );
    }
}

export default Header;