import React from 'react';
import { Header, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => {
  return (
  <Segment inverted color='blue'>
    <Header as='h1'  textAlign='center' size='huge' style={{ marginTop: '18px', height:'50px'}}>
      <font size="6" >

          <Link to='/' className="item"  style={{color:'white'}}>
            고객님께 안전을 보장하겠습니다
          </Link>

      </font>
   </Header>
  </Segment>
 );
};
