import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group'






class App extends React.Component {

 
  constructor(props) {
    super(props)

    this.state = {
      item1: false,
      item2: false,
      item3: false,
      item4: false,
      showThis: false
    }

  }



  mouseEnter = (ev) => {
    this.setState({
      showThis: true
    })
  }

  mouseLeave = (ev) => {
    this.setState({
      showThis: false
    })
  }

render() {


  const items = ['First item', 'second item', 'third item', 'fourth item']

  let showThis = this.state.showThis

  return (


    <div className="box flex">


    {items.map((el, i) => {

      return <div className="img-with-text">
    <img src= {`./images/${i}.png`} className='hoverimage' value={`item${i}`} onMouseEnter ={this.mouseEnter} onMouseLeave = {this.mouseLeave} style={{maxHeight: '75px', width: 'auto'}} />
    <CSSTransition
      key={i}
      // classNames={`${i}sub`}
      classNames="sub"
      // in={this.state[`item${i}`]}
      in={showThis}
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
