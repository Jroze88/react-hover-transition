import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group'






class App extends React.Component {

 
  constructor(props) {
    super(props)

    this.state = {
      'item1': false,
      'item2': false,
      'item3': false,
      'item4': false,
      showThis: false
    }

  }



  mouseEnter = (ev) => {
 
    this.setState({
      item1: true
    })

  }

  mouseLeave = (ev) => {
    this.setState({
      item1: false
    })
  }

render() {


  const items = ['First item', 'second item', 'third item', 'fourth item']
  let state = this.state

  return (


    <div className="box flex">


    {items.map((el, i) => {

      return <div key = {i} className="img-with-text">
    <img src= {`./images/${i}.png`} className='hoverimage' value={`item${i}`} onMouseEnter ={this.mouseEnter} onMouseLeave = {this.mouseLeave} style={{maxHeight: '75px', width: 'auto'}} />
    <CSSTransition
      key={i}
      // classNames={`${i}sub`}
      classNames="sub"
      // in={this.state[`item${i}`]}
      in={state[`item${i}`]}
      timeout={1300}
      >
      <p  className='title sub'>{el}</p>
      </CSSTransition>
    </div>

  


    })}
     



</div>
  );
}
}
export default App;
