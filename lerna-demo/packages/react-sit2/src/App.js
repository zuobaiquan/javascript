import React, { Component, memo } from 'react';

const Foo = memo(function Foo(props) {
  console.log('Foo reander');
  return <div>子组件person.age的值：{props.person.age}</div>;
})

class App extends Component {

  state = {
    count: 0,
    person: {
      age: 18
    }
  };

  callback = () => { }

  render() {
    const person = this.state.person;
    return (
      <div className="app">
        <p>count值：{this.state.count}</p>
        <Foo person={person} cb={this.callback} />
        <button
          onClick={() => {
            person.age++
            this.setState({
              count: this.state.count + 1,
              person
            })
          }}>
          Add
        </button>
      </div>
    )
  }
}

export default App;