import React from 'react';
import Header from '../component/header';
import ContainerAbout from '../component/container-about';
import Footer from '../component/footer';

class About extends React.Component {
    render() {
        return (
        <div>
            < Header />
            < ContainerAbout />
            < Footer/>
        </div>
        );
    }
}

export default About;