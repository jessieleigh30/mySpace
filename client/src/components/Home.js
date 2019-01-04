import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { friends: [], };


  componentDidMount() {
    axios.get('/api/friends')
      .then( res => this.setState({ friends: res.data, }))
    }

  sample = () => {
    const{ friends } = this.state;
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length);
      return friends[index];
    } else {
      return null;
    }
  }

  unfollow = (id) => {
    const { friends, } = this.state;
    this.setState({ friends: friends.filter( f => f.id !== id, )})
  } 

  follow = (id) => {
    const { friends, } = this.state;
    axios.put(`/api/friends/${id}`)
      .then(() => this.setState({ friends: friends.filter( f => f.id !== id ), }) )
  }

  render() {
    const friend = this.sample();
    if (friend) {

    return (
      <div>
      <br/>
      <Header as="h1" textAlign="center">MySpace Buds</Header>
      <br/>
      <Card 
      centered
      key={friend.id}>
        <Image src={friend.avatar} />
        <Card.Content>
          <Card.Header>
            <Card.Description>
            { friend.name }
            </Card.Description>
            <Card.Meta>
              { friend.location }
            </Card.Meta>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button color="red" icon basic onClick={()=> this.unfollow(friend.id)}>
            <Icon name="thumbs down" />
          </Button>
          <Button color="green" icon basic onClick={() => this.follow(friend.id)}>
            <Icon name="thumbs up" />
          </Button>
        </Card.Content>
      </Card>
      

      </div>
      )
    } else {
      return <Header textAlign="center">No More Friends</Header>
    }
  }
}

export default Home;