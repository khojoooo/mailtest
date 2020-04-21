import React, {Component} from 'react';
import User from './components/User'
import './App.css';
import UserAdd from './components/UserAdd';
import {Table} from 'semantic-ui-react';

class App extends Component {

  state = {
    users:""
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({users: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/users');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
       <Table>
         <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>pw</Table.HeaderCell>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>p1</Table.HeaderCell>
            <Table.HeaderCell>p2</Table.HeaderCell>
            <Table.HeaderCell>p3</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            this.state.users ? this.state.users.map( c=> {
              return (
                <User
                  key={c.id}
                  id={c.id}
                  pw={c.pw}
                  name={c.name}
                  p1={c.p1}
                  p2={c.p2}
                  p3={c.p3}
                  email={c.email}
                />
              );
            }) : ""
          }
        </Table.Body>
       </Table>
       <UserAdd/>
      </div>
    );
  }
}

export default App;
