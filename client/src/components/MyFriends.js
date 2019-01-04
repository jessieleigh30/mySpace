import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, Header } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => this.setState({ friends: res.data, }) );
  }

  render() {
    const { friends, } = this.state;
    return (
      <div>
      <br/>
     <Header as="h1" textAlign="center"> MySpace Buds</Header>
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { friend.name }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      </div>
    )
  
  }
}

export default MyFriends;