import React from 'react';
import Header from '../component/header';
import ContainerBerita from '../component/container-berita';
import axios from 'axios';

const apiKey1 = "4d105bbb58624f6093cc09b5f19e883d"
const apiKey2 = "4d105bbb58624f6093cc09b5f19e883d"
const newsAPI = "https://newsapi.org/v2/"

class Home extends React.Component {
    state = {
        listNews:[],
        isLoading:true,
        search: "",
        articleNews: []
    }
    componentDidMount =() =>{
        const self = this
        axios 
        .get(`${newsAPI}top-headlines?country=us&apiKey=${apiKey1}`)
        .then(function(response) {
            self.setState({ listNews: response.data.articles, isLoading: false});
        })
        .catch(function(error) {
            self.setState({ isLoading: false });
        })

        this.ArticleNews()
    }
    ArticleNews =() =>{
        const self = this
        axios 
        .get(`${newsAPI}everything?q=bitcoin&apiKey=${apiKey2}`)
        .then(function(response) {
            self.setState({ articleNews: response.data.articles, isLoading: false});
        })
        .catch(function(error) {
            self.setState({ isLoading: false});
        })
    }
    render() {
        return  (
        <div>
            < Header/>
            <ContainerBerita listNews={this.state.listNews} articleNews={this.state.articleNews}/>
        </div> );
    }
}

export default Home;