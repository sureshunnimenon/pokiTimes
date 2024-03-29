import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component {
  state = {
      posts: []
  }

  componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {console.log(response)
                                this.setState({
                                posts: response.data.slice(0,20)
                            })        
                        })        
  }

  render() {
    const { posts } = this.state;
    const PostList = posts.length ? (
        posts.map((post) => {
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="pokeball "/>
                    <div className="card-content">
                        <Link to = {'/' + post.id}>
                        <span className="card-title red-text"> { post.title} </span>
                        </Link>
                        <p> {post.body} </p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center"> No posts yet! </div>
    )
    return (
        <div className="container home">
          <h4 className="center"> Home Page </h4>          
            {PostList}           
        </div>
      );
  }
};

export default Home;
