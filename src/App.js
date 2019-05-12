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
      user1: [],
      user2: []
    };
    this.handler = this.handler.bind(this);
    this.handler2 = this.handler2.bind(this);
  }
  handler = (changedVal) =>
  {
    var api1 = 'https://api.github.com/users/' + changedVal;
    fetch(api1)
    .then(response => response.json())
    .then(user => this.setState({user1: user}))

  }
  handler2 = (changedVal) =>
  {
    var api2 = 'https://api.github.com/users/' + changedVal;
    fetch(api2)
    .then(response => response.json())
    .then(user => this.setState({user2: user}))

  }
  render()
  {
    return (
      <div>
        <h1 className="tc">Compare git profiles here!</h1>

        <div className="flex">
          <div className="outline w-50 pa2 mr2 ">
            <SearchBox userNum={"1"} />
            <Button handler={this.handler} userNum={"1"}/>
            <ProfileCard user={this.state.user1}/>
          </div>
          <div className="outline w-50 pa2 mr2 ">
            <SearchBox userNum={"2"} />
            <Button handler={this.handler2} userNum={"2"}/>
            <ProfileCard user={this.state.user2}/>
          </div>
        </div>
      </div>
    );  
  }
  
}

export default App;
