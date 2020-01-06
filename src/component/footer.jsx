import React from 'react';

class Footer extends React.Component {
    render() {
        return  (
<footer>
    <div className="background_footer container-fluid"> 
        <div className="container align-items-center">
            <div className="footer-center row">
                <div className="col-md-4">
                    <img src={require("../assets-final-project-fe/logo-ALTA-v2.png")} id="img-alterra-academy" alt=""/>
                </div>
                <div className="col-md-4 ">
                    <div className="social-media"> 
                        <p className="caption-social-media">Social Media</p>
                    </div>
                    <div className="logo">
                        <a href="http://facebook.com"><img src={require("../assets-final-project-fe/ic_fb.png")} alt="" /></a>
                        <a href="http://twitter.com"><img src={require("../assets-final-project-fe/ic-twitter.png")} alt=""/></a>
                        <a href="http://instagram.com"><img src={require("../assets-final-project-fe/ic-instagram.png")} alt=""/></a>
                        <a href="http://linkedin.com"><img src={require("../assets-final-project-fe/ic-linkedin.png")} alt=""/></a>
                    </div>
                </div>
                <div className="copyright col-md-4">
                    <p className="writter">Copyright &copy; 2019 Alterra</p>
                </div>
            </div>
        </div>
    </div>
</footer>
 );
    }
}

export default Footer;