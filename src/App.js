import React, { Component } from 'react';
import {  WiDayCloudy,	  WiDayHaze,WiMoonAltWaningCrescent6, WiMoonAltWaningCrescent2,WiDayHail } from 'react-icons/wi';
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
  state = {a:3,b:3,c:3,d:3}
  
  
  changeSizeMon=(e)=>{
   this.setState({a:4,b:2,c:3,d:3});
  }
  changeSizeTue=(e)=>{
   this.setState({a:3,b:4,c:2,d:3});
  }
  changeSizeWed=(e)=>{
   this.setState({a:3,b:3,c:4,d:2});
  }
  changeSizeFri=(e)=>{
    console.log(e)
   this.setState({a:3,b:3,c:2,d:4});
  }
  render() {
    return (
      
      <div className="App">

  
        <Jumbotron className='jumbo'>
        
            <h3 className='jumbo3'>React Weather App</h3>
        <h6 className="styleh6">You can get the daily forecast of your city here...</h6>
      </Jumbotron>


        <Row style={rowStyle}>
          <Col>
          <h2 className="hStyle">
               Bangalore, India
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
          <Col className='style1 mon' sm={12} lg={this.state.a}  onClick={this.changeSizeMon}>  Tonight <WiMoonAltWaningCrescent6  size="2.5em"/></Col>
          <Col className='style1 tue' sm={12} lg={this.state.b} onClick={this.changeSizeTue}>{Tommorow.toDateString()} <WiDayHaze size="3em"/></Col>
          <Col className='style1 wed' sm={12} lg={this.state.c} onClick={this.changeSizeWed}>  {Tommorow.toDateString()}  Night <WiMoonAltWaningCrescent2  size="2.5em"/> </Col>
          <Col className='style1 fri' sm={12} lg={this.state.d} onClick={this.changeSizeFri}> {dayafter.toDateString()}<WiDayHail  size="2.5em"/> </Col>
          
        </Row>

  
     
      </div>
    );
  }
}

export default App;
