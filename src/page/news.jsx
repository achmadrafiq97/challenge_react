import React, {Component} from 'react';
import axios from 'axios';
import Header from '../component/header';
// Custom components
import ContainerBerita from "../component/ContainerBerita";

// News API
const apiKey = "4d105bbb58624f6093cc09b5f19e883d";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=id$apiKey=" + apiKey;

class News extends Component {
    state = {
        listNews: [],
        isLoading: true,
        category: 'sport'
    };
    componentDidMount = () => {
        const self = this;
        axios 
        .get(`${baseUrl}top-headlines?country=id&category=${this.state.category}`)
        .then(function (response) {
            self.setState ({ listNews: response.data.articles, isLoading: false});
            //handle success
            //console.log(response.data);
        })
        .catch(function (error) {
            self.setState({ isLoading: false});
            // handle error
            // console.log(error);
        });
    };
    render() {
        //const news = this.state.listNews;
        const { listNews, isLoading} = this.state;
        //console.log("news", news);
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.image !== null) {
                return item;
            }
            return false;
        }); return (
                <div>
                < Header/>
                <ContainerBerita listNews={this.state.listNews}/>
    </div> );

        return (
            <div className="headlineNews">
                {isLoading ? <div style={{textAlign: "center"}}>Loading...</div> :}
            </div>
        );
}

export default News;