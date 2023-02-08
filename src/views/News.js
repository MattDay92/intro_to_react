import React, { Component } from 'react'
import Article from '../components/Article';

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            inputText: ''
        }
    }

    getNews = async (term='bitcoin') => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${term}&from=2023-02-07&sortBy=popularity&apiKey=1cae295cefa44226916dee24fde013e8`);
        const data = await res.json();
        const articles = data.articles;
        this.setState({articles: articles})
    }

    componentDidMount(){
        //this becomes very helpful when dealing with ASYNC actions
        //it can run after the initial rendering has completed
        this.getNews()
    }

    showArticles = () => {
        // .map is like a for loop applying a function to each
        return this.state.articles.map((a, i) => {return <Article key={i} articleInfo = {a}/>})
                                            // key=i gives each article a unique key (from the index)
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const term = e.target.input1.value
        this.getNews(term)
    }

    handleChange = async (e) => {
        this.setState({inputText: e.target.value})
    }


    render() {
        return (
            // react fragments - placeholder elements
            <>
            
                <h1>News</h1>

                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Uncontrolled' name='input1'/>
                    <button type='submit'>Search</button>
                </form>

                <form>
                    <input placeholder='Controlled' value={this.state.inputText} onChange={this.handleChange} />
                    <button>Search</button>
                </form>

                {/* Show articles HERE */}
                <div className = "row">
                {this.state.articles.length == 0?<p>loading...</p>:this.showArticles()}
                </div>
            
            </>
        )
    }
}
