import React, {Component} from 'react';
import SearchBox from './SearchBox';
import Button from './Button';
import ProfileCard from './ProfileCard';
class App extends Component
{
  constructor()
  {
    super();
    this.state = 
    {
      user1: []
    };
    this.handler = this.handler.bind(this);
  }
  handler = (changedVal) =>
  {
    var api1 = 'https://api.github.com/users/' + changedVal;
    fetch(api1)
    .then(response => response.json())
    .then(user => this.setState({user1: user}))

  }
  render()
  {
    return (
      <div>
        <h1>Compare your Git profiles here!</h1>
        <SearchBox />
        <Button handler={this.handler}/>
        <ProfileCard user={this.state.user1}/>
      </div>


    );  
  }
  
}

export default App;
