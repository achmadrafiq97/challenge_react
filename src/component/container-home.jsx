import React from 'react';
// import ReactDOM from 'react-dom';

class ContainerHome extends React.Component {
    render() {
        return  ( 
        <section className="margin-atas">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="background_home col-md-12">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <img className="image_home" src={require("../assets-final-project-fe/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")} alt=""/>
                                </div>
                                <div className="col-md-7 d-flex justify-content-center">
                                    <div className="home_content">
                                        <h4>Hi, my name is</h4>
                                        <h2>Anne Sullivan</h2>
                                        <h3>I build things for the web</h3>
                                        <a href="contact.html" className="home_button">Get In Touch</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> );
    }
}

export default ContainerHome;