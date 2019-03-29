import React, { Component } from 'react';
import axios from 'axios';

export default class About extends Component {

  state = {
    posts: [],
    title: '',
    description: '',
  };

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).then(response => {
      this.setState({ posts: response.data })
    })
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, description  } = this.state;
    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        title,
        body: description,
        userId: 1,
      }
    }).then((res) => {
      const { posts } = this.state;
      throw new Error('Something drastic happened')
      this.setState({ posts: [res.data, ...posts], title: '', description: '' })
    }).catch((e) => {
      console.log(e)
    })
  };

  render() {
    const { posts, title, description } = this.state;
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="title"
            onChange={this.handleChange('title')}
            value={title}
          />
          <br/>
          <input
            type="text"
            placeholder="description"
            onChange={this.handleChange('description')}
            value={description}
          />
          <br/>
          <button type="submit">Save</button>
        </form>

        {
          posts.map(post => {
            return (
              <div key={post.id} style={{ padding: 10 }}>
                {post.body}
              </div>
            )
          })
        }
      </div>
    );
  }
}