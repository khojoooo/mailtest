import React, { Component } from "react";
import Layout from "../components/Layout";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Input
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends Component {

  state = {
    users: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: ""
    };
  }

  callApi = async () => {
    const response = await fetch("/api/users");
    const body = await response.json();
    return body;
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({
      id: "",
      pw: ""
    });

    //window.location.reload();
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);

    this.callApi()
      .then(res => this.setState({ users: res }))
      .catch(err => console.log(err));
  };

  loginCheck = () => {
    const length = this.state.users.length;

    let login_state = 0;
    var i = 0;
    for (i; i < length; i++) {
      if (this.state.users[i].id === this.state.id) {
        console.log("id success");
        login_state = 1;
        break;
      } else {
        console.log("id fail");
      }
    }

    console.log(i);

    if (login_state === 1) {
      if (this.state.users[i].pw === this.state.pw) {
        console.log("pw success");
        alert("로그인 성공");
        const url = this.state.users[i].address;
        return this.props.history.push('/mail/'+url);

      } else {
        console.log("pw fail");
        alert("로그인 실패");
      }
    } else {
      alert("로그인 실패");
    }
  };

  render() {
    return (
      <Layout>
        <Grid
          textAlign="center"
          style={{ height: "40vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              귀하의 계정을 로그인해주세요
            </Header>
            <Form size="large" onSubmit={this.handleFormSubmit}>
              <Segment stacked>
                <Form.Field>
                  <Input
                    icon="user"
                    iconPosition="left"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleValueChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    icon="lock"
                    name="pw"
                    iconPosition="left"
                    type="password"
                    value={this.state.pw}
                    onChange={this.handleValueChange}
                  />
                </Form.Field>

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.loginCheck}
                >
                  로그인
                </Button>
              </Segment>
            </Form>
            <Message>
              처음이십니까?
              <Link to="/signUp"> 회원가입</Link>
            </Message>
            <Message>
              <Link to="/list">회원 목록</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default Login;
