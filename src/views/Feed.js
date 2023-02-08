import React, { Component } from 'react';
import Post from '../components/Post';

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
      
    }
  };


  showPosts = () => {
    return this.state.posts.map(p => <Post key={p.id} postInfo={p} />)
    // .map is a loop through the posts list in the constructor
    // 'for p in posts'
  };

  getPosts = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/posts`)
    const data = await res.json()
    if (data.status === 'ok'){
      this.setState({posts: data.posts})
    }
  }

  componentDidMount = () => {
    this.getPosts()
  }


  render() {
    return (
      <div>
        {this.showPosts()}
      </div>
    )
  }
}
