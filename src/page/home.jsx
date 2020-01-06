import React from 'react';
import Header from '../component/header';
import ContainerBerita from '../component/container-berita'

class Home extends React.Component {
    render() {
        return  (
        <div>
            < Header />
            <ContainerBerita />
        </div> );
    }
}

export default Home;