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
      'item0': false,
      showThis: false
    }

  }



  mouseEnter = (ev) => {

    let thisObj = this.state[`${ev.target.getAttribute('value')}`]

 

    console.log(ev.target.getAttribute('value'))
 
    this.setState({
      [`${ev.target.getAttribute('value')}`]: true
    }, () => {
      console.log(this.state)
    })


  }

  mouseLeave = (ev) => {




    console.log(ev.target.getAttribute('value'))
 
    this.setState({
      [`${ev.target.getAttribute('value')}`]: false
    }, () => {
      console.log(this.state)
    })


  }

render() {


  const items = ['First item', 'second item', 'third item', 'fourth item']
  let state = this.state

  return (


    <div className="box flex">


    {items.map((el, i) => {

      let thisI = i

      return <div key = {thisI} className="img-with-text">
    <img src= {`./images/${thisI}.png`} className='hoverimage' value={`item${thisI}`} onPointerEnter ={this.mouseEnter} onMouseLeave = {this.mouseLeave} style={{maxHeight: '75px', width: 'auto'}} />
    <CSSTransition
      key={thisI}
      // classNames={`${i}sub`}
      classNames="sub"
      // in={this.state[`item${i}`]}
      in={state[`item${thisI}`]}
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
