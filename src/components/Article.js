import React, { Component } from 'react'

export default class Article extends Component {
  render() {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={ this.props.articleInfo.urlToImage } className="card-img-top" alt={ this.props.articleInfo.title }/>
        <div className="card-body">
        <h5 className="card-title">{ this.props.articleInfo.title }</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ this.props.articleInfo.author } - { this.props.articleInfo.source.name }</h6>
        <p className="card-text">{ this.props.articleInfo['description'] }</p>
        <a href={ this.props.articleInfo.url } className="btn btn-primary">Go to article Page</a>
        </div>
    </div>
    )
  }
}
