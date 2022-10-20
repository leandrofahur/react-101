import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
    // console.log('Constructor');
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  render() {
    // console.log('render');
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <input
          placeholder='search monsters'
          className='search-box'
          type='search'
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();

            this.setState(
              () => {
                return { searchField };
              },
              () =>
                console.log({ monsters: this.state.monsters, filteredMonsters })
            );
          }}
        />
        {filteredMonsters.map((monster, index) => {
          return (
            <div key={index}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
