import React, { Component } from "react";
import { PostWrapper, Post } from "../../components";
import Layout from "../../components/Layout";

class PostContainer extends Component {
  state = {
    users: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ users: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/users");
    const body = await response.json();
    return body;
  };
  render() {
    return (
    <Layout>
      <PostWrapper>
        <Post users={this.state.users}/>
      </PostWrapper>
    </Layout>
    );
  }
}

export default PostContainer;
