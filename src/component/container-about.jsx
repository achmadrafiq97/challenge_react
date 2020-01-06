import React from 'react';

class ContainerAbout extends React.Component {
    render() {
        return  (
<div className="margin-atas">
    <div className="canvas container-fluid">
        <div className="row align-items-center">
            <div className="background_title col-md-12">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h1 className="experience_title">ABOUT ME.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="font-16-blue-atas">Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design</p> 
                    <h2 className="font-22" > Education</h2>
                    <ul className="font-group">
                        <li className="font-18-blue-medium"><b>2014</b></li>
                            <span className="font-16-blue-medium"><b>DIPLOMA</b></span>
                            <p className="font-16-blue"> Computer Engineering-University of Chicago</p>
                        <li className="font-18-blue-medium"><b>2018</b></li> 
                            <span className="font-16-blue-medium"><b>BACHELOR DEGREE</b></span>
                            <p className="font-16-blue">BS Computer Engineering-University of Chicago</p>
                    </ul>
                    <br/>
                    <h2 className="font-18-blue">Here's few technologies I've been working with recently: </h2>
                    <table className="font-18-blue-table">
                        <tr>
                            <th>HTML & CSS</th>
                            <th>Serverless</th>
                            <th>Scrum</th>
                        </tr>
                        <tr>
                            <th>Programming</th>
                            <th>Restful API</th>
                            <th>Test-Driven Dev</th>
                        </tr>
                        <tr>
                            <th>Database</th>
                            <th>Javascript</th>
                            <th>Software Testing</th>
                        </tr>
                        <tr>
                            <th>Git & Github</th>
                            <th>Single Page App</th>
                            <th>UX/UI Designer</th>
                        </tr>
                    </table>
                </div>
                <div className="col-md-6">
                    <div id="positon-image">
                            <img id="img-dot" src={require("../assets-final-project-fe/img-dot.png")} alt=""/>
                        <img id="img-aboutme" src={require("../assets-final-project-fe/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
    }
}

export default ContainerAbout;