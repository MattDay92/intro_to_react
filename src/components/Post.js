import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={this.props.postInfo.img_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.postInfo.title} - {this.props.postInfo.author}</h5>
                    {/* These names and posts came from the Flask app API  */}
                    <p className="card-text">{this.props.postInfo.caption}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}
