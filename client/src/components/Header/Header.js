import React from "react";
import { Header, Segment } from "semantic-ui-react";

export default () => {
  return (
    <Segment textAlign="center" inverted color="blue">
      <Header as="h1" size="huge" style={{ marginTop: "18px", height: "50px" }}>
        <a className="item" style={{ color: "white" }}>
          고객님께 안전을 보장하겠습니다
        </a>
      </Header>
    </Segment>
  );
};
