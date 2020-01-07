import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    render() { 
        return  (
            <header>
                <div>
                    <div className="row align-items-center">
                        <p>{this.props.test}</p>
                        <div className="col-md-2">
                            <a className="header-logo">
                                <img src={logo} alt=""/>
                            </a>
                            <a className="font-kabarkabar">KabarKabar</a>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <div className="navbar">
                                    <a href="" className="header-margin-list">Sepakbola</a>
                                    <a href="" className="header-margin-list">Ekonomi</a>
                                    <a href="" className="header-margin-list">Politik</a>
                                    <a href="" className="header-margin-list">Hiburan</a>
                                    <div class="dropdown">
                                        <button className="dropbtn">Lainnya 
                                            <i className="fa fa-caret-down"></i>
                                        </button>
                                        <div className="dropdown-content">
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <a href="#">Link 3</a>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 navbar">
                            <div className="search-container">
                                <form action="/action_page.php">
                                    <input type="text" placeholder="Search.." name="search"/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2 navbar">
                        <a href="#">Masuk</a>
                        <a href="#">Daftar</a>
                        </div>
                    </div>
                </div>
            </header>
         );
    }
}

export default Header;