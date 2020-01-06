import React from 'react';
import Header from '../component/header';
import ContainerExperience from '../component/container-experience';
import Footer from '../component/footer';

class Experience extends React.Component {
    render() {
        return (
        <div>
            < Header />
            < ContainerExperience />
            <Footer />
        </div>
        );
    }
}

export default Experience;