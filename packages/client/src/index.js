import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    const { users } = this.state;

    return (
      <ul>
        {users.map((user) => <li key={user._id}>{user.name}</li>)}
      </ul>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
