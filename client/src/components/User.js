import React,{ Component }from 'react';
import { Table } from 'semantic-ui-react';
import "./User.css";
import 'semantic-ui-css/semantic.min.css';

class User extends Component{
  render() {
    return(
      <Table.Row>
        <Table.Cell>{this.props.id}</Table.Cell>
        <Table.Cell>{this.props.pw}</Table.Cell>
        <Table.Cell className="name">{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.phone}</Table.Cell>
        <Table.Cell>{this.props.email}</Table.Cell>
        <Table.Cell>{this.props.address}</Table.Cell>
      </Table.Row>
    )
  }
}

export default User;
