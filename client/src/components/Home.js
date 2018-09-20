import React, { Component } from 'react';
import { Header, Image, Card, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom'


class Home extends Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/friends')
      .then( res => this.setState({ friends: res.data }) )
    }

    downVote = (id) => {
      let { friends } = this.state;
      this.setState({ friends: friends.filter( c => c.id !== id ) })
    }
    
    upvote = (id) => {
      let { friends } = this.state;
      axios.put(`/api/friends/${id}`)
        .then( () => this.setState({ friends: friends.filter( c => c.id !== id ) }) )
    }

    sample = () => {
      const { friends } = this.state
      if (friends.length) {
        const index = Math.floor(Math.random() * friends.length)
        return friends[index]
      } else {
        return null
      }
    }

    render() {
      const friend = this.sample()
      if (friend) {
        return(
        <div>
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Card.Header>
                {friend.name}
              </Card.Header>
              <Card.Description>
                {friend.location}
              </Card.Description>
              <Card.Meta>
                {friend.email}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button basic onClick={() => this.downVote(friend.id)}>
                <Icon name="thumbs down" />
              </Button>
            </Card.Content>
              <Button basic onClick={() => this.upvote(friend.id)}>
                <Icon name="thumbs up" />
              </Button>
          </Card>
          <Link to="my_friends">My Friends</Link>
          </div>
        );
      } else {
        return <Header textAlign="center">No More Friends</Header>
      }
    }
}

export default Home;