import React, { Component } from 'react';
import { Card, Table , Form} from 'react-bootstrap';
import matches from '../matches.json'

import './styling.css'
export class Ipl extends Component {

state={
    matches:[]
}




  render() {
    
    return (

        <section className="bgimage">
        <div >
        <center>
    <h1 style={{paddingTop:"2rem", color:"#fff"}}>IPL</h1>
</center>
       {matches.map((index)=>{
        
           return(
               <>

<div className="container" style={{marginTop:"1rem"}}>

<Card>
           
           <div class="row m-0" style={{padding:"2rem"}}>
           
              
    <br/>
    <center style={{width:"100%"}}>
 
  <h1 style={{color:"darkslategrey"}}>{index.team1}</h1>
    <span style={{color:"#2c5fab", fontSize:"30px"}}>VS</span>

 
   <h1 style={{color:"darkslategrey"}}>{index.team2}</h1>
    </center>        
            </div> 
     
            </Card>
         
            </div>

            <div class="container" style={{padding:"0"}} >
            <Card >
     <Card.Body style={{boxShadow:"#fff 5px -5px 7px 15px"}}>
     <div class="row m-0" style={{width:"100%"}}>
        <div class="col-sm-4 col-md-9" >
    
        <Card >
      <Card.Body style={{boxShadow:"#2c5fab 0px 1px 11px 7px"}}>
        <Card.Title style={{color:"#2c5fab"}}>Details</Card.Title>
        <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th style={{color:"#2c5fab"}}>City</th>
          <th style={{color:"#2c5fab"}}>Date</th>
          <th style={{color:"#2c5fab"}}>Team -1 </th>
          <th style={{color:"#2c5fab"}}>Team - 2</th>
     
        </tr>
      </thead>
      <tbody>
        <tr>
           <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.city}</td>
           <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.date}</td>
           <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.team1}</td>
           <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.team2}</td>
      
        </tr>
     
      </tbody>
    </Table>
      </Card.Body>
    </Card>
    <br/>
    <Card >
   
    <Card.Body style={{boxShadow:"#2c5fab 0px 1px 11px 7px"}}>
    <Card.Title style={{color:"#2c5fab"}} >Scores</Card.Title>
      <Table striped bordered hover responsive>
      <thead>
        <tr>
         
          <th style={{color:"#2c5fab"}}>Win by Runs</th>
          <th style={{color:"#2c5fab"}}>Win by wickets</th>
          <th style={{color:"#2c5fab"}}>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
     
        <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.win_by_runs}</td>
        <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.win_by_wickets}</td>
        <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.result}</td>

        </tr>
     
      </tbody>
    </Table>
   
      </Card.Body>
    </Card>
    
    </div>
    <div class="col-sm-8 col-md-3">
        <center style={{height:"100%"}}>
    
    <Card style={{height:"100%"}}>
    <Card.Body style={{boxShadow:"#2c5fab 0px 1px 11px 7px"}}>
        <Card.Title style={{color:"#2c5fab", fontSize:"30px", fontWeight:"bold", textDecoration:"underline"}}> Final Results</Card.Title>
       
           
    <Form>


    <Form.Group style={{paddingTop:"1rem"}}>
  <Form.Label style={{color:"darkslategrey", fontSize:"20px", fontWeight:"500"}}>Winning Team</Form.Label>
   <p style={{fontSize:"24px", fontWeight:"500", color:"rgb(36, 189, 48)"}}>{index.winner}</p>
  </Form.Group>

    {/* <Form.Group >
    <Form.Label style={{color:"#2c5fab", fontSize:"22px", fontWeight:"500"}}>Season</Form.Label>
   <p style={{fontSize:"24px", fontWeight:"500", color:"#24bd30"}} >{index.season}</p>
   
  </Form.Group> */}

  <Form.Group  style={{paddingTop:"2rem"}} >
  <Form.Label style={{color:"darkslategrey", fontSize:"22px", fontWeight:"500"}}>Man of the Match</Form.Label>
   <p style={{fontSize:"24px", fontWeight:"500", color:"red"}}>{index.player_of_match}</p>
   
  </Form.Group>



</Form>

      </Card.Body>
    </Card>
    
            
    </center>
      
           </div>
    
    </div>
    
    <br/>
    
    <div class="row m-0" >
    <div className="col-md-12"  >
    <Card >
    <Card.Body style={{boxShadow:"#2c5fab 0px 1px 11px 7px"}}>
        
        <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th style={{color:"#2c5fab"}}>Venue</th>
          <th style={{color:"#2c5fab"}}>Umpire- 1</th>
          <th style={{color:"#2c5fab"}}>Umpire- 2</th>
          <th style={{color:"#2c5fab"}}>Toss Winner</th>
          <th style={{color:"#2c5fab"}}>Toss Decision</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.venue}</td>
        <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.umpire1}</td>
        <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.umpire2}</td>
         
        <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.toss_winner}</td>
        <td style={{color:"darkslategrey", fontSize:"16px", fontWeight:"500"}}>{index.toss_decision}</td>
         
         
        </tr>
     
      </tbody>
    </Table>
      </Card.Body>
    </Card>
        </div>
        </div>
    
     </Card.Body>
    </Card>
    
    
    
    
    </div>
    </>
           )
       })}


      </div>
      </section>
    );
  }
}

export default Ipl;
