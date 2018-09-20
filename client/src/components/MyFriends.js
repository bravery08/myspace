import React from 'react';
import { Card, Image, Divider } from 'semantic-ui-react';
import axios from 'axios';

class MyFriends extends React.Component {
  state = { friends: [] }

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => {
        this.setState({ friends: res.data })
      });
  }

  render() {
    let { friends } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
            <Card key={friend.id}>
              <Card.Content>
                <Image src={friend.avatar} />
                <Divider />
                <Card.Header>
                  {friend.name}
                </Card.Header>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default MyFriends