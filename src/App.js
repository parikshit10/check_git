import React, {Component} from 'react';
import SearchBox from './SearchBox'
import Button from './Button'

class App extends Component
{
  constructor()
  {
    super();
    this.state = 
    {
      api1: 'https://api.github.com/users/'
    };
    this.handler = this.handler.bind(this);
  }
  render()
  {
    return (
      <div>
        <h1>Compare your Git profiles here!</h1>
        <SearchBox />
        <Button />
      </div>


    );  
  }
  
}

export default App;
