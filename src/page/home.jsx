import React from 'react';
import Header from '../component/container-home'
import ContainerHome from '../component/header'

class Home extends React.Component {
    render() {
        return (
        <div>
            < Header />
            < ContainerHome />
        </div>
        );
    }
}

export default Home;