import React, { Component } from 'react';
import {  WiDayCloudy,	 WiFire, WiDayHaze,WiMoonAltWaningCrescent6, WiMoonAltWaningCrescent2,WiDayHail } from 'react-icons/wi';
import './App.css';
import {Jumbotron,Row,Col} from 'react-bootstrap'

const rowStyle={
  height:'370px',
  border: '1px solid white',
  background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
  color:'#ffffff',
  width: '60%',
  margin: '0 auto',
  fontWeight: 'bold',
  textTransform:'uppercase',
  fontFamily: 'Arial, Helvetica, sans-serif',
  padding:'0 auto',
  borderRadius:'5px'
 
};
const h1Style={
  margin:'1%  35% 5% 35%',
  fontSize:'28px',
  fontWeight:'bold'
}
const row2Style={
 
 
  margin: '0 auto',
  width: '60%',
  height:'300px'

}
const h7style={
  fontSize:'10px',
  margin:'1%  22% 5% 22%'

}

const date= new Date();
const tom= date.getTime();
console.log(tom,"tom")
const Tommorow= new Date(tom+8640000)
console.log(Tommorow,99)
const dayafter=new Date(tom+17280000)

class App extends Component {
  
  
  render() {
    return (
      
      <div className="App">

  
        <Jumbotron className='jumbo'>
        
            <h3 className='jumbo3'>React Weather App</h3>
            <h6 className="styleh6">You can get the daily forecast of your city here...</h6>
      </Jumbotron>


        <Row style={rowStyle}>
          <Col>
          <h2 style={h1Style}>
            <span>   Bangalore, India< WiFire size="1.5em"/> </span>
            <p style={h7style}>{date.toDateString()}</p>
          </h2>
          
          <Row >
        
          <Col className="todayDetails temp">
          32°  <WiDayCloudy size="2.5em" /><br/>
          HAZE
          <p className="h8Style">feels like 32°<br/>
          H -- L 26°<br/>
          UV Index 0 of 10</p>

          </Col>
         
        
          </Row>
          
                  
          </Col>
        </Row>

        <Row style={row2Style}>
          <Col className='style1 mon'>  Tonight <WiMoonAltWaningCrescent6  size="2.5em"/></Col>
          <Col className='style1 tue'>{Tommorow.toDateString()} <WiDayHaze size="3em"/></Col>
          <Col className='style1 wed'>  {Tommorow.toDateString()}  Night <WiMoonAltWaningCrescent2  size="2.5em"/> </Col>
          <Col className='style1 fri'> {dayafter.toDateString()}<WiDayHail  size="2.5em"/> </Col>
          
        </Row>

  
     
      </div>
    );
  }
}

export default App;
