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
  handler = (changedVal) =>
  {
    this.setState({api1: this.state.api1+changedVal})
    // fetch('')
  }
  render()
  {
    return (
      <div>
        <h1>Compare your Git profiles here!</h1>
        <SearchBox />
        <Button handler={this.handler}/>
      </div>


    );  
  }
  
}

export default App;
