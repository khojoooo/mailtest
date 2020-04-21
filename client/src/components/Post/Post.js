import React from "react";
import User from '../User';
import { Table } from "semantic-ui-react";
import "./Post.css";
import 'semantic-ui-css/semantic.min.css';

const Post = ({ users }) => (
  <div className="Post">
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>id</Table.HeaderCell>
          <Table.HeaderCell>pw</Table.HeaderCell>
          <Table.HeaderCell className="name">name</Table.HeaderCell>
          <Table.HeaderCell>phone</Table.HeaderCell>
          <Table.HeaderCell>email</Table.HeaderCell>
          <Table.HeaderCell>address</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users
          ? users.map(c => {
              return (
                <User
                  key={c.id}
                  id={c.id}
                  pw={c.pw}
                  name={c.name}
                  phone={c.phone}
                  email={c.email}
                  address={c.address}
                />
              );
            })
          : ""}
      </Table.Body>
    </Table>
  </div>
);

export default Post;
