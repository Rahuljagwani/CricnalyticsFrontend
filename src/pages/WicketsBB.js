import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Axios from "axios";


const WicketsBB = () => {
  const [PlayerList, setPlayerList] = useState([]);
  const [Batsman, setBatsman] = useState([]);
    
  const [NumberofwicketTakers, setNumberofwicketTakers] = useState(0);
  const submitNumber = () => {
    // if(NumberofwicketTakers<1)
        // {
            
        //     alert("Enter value greater than 0");
            
        // }
      Axios.post("http://localhost:3001/api/wicketbybatsman", {
          NumberofwicketTakers: NumberofwicketTakers,
          Batsman:Batsman
      }).then(() => { })

      

  };
  useEffect(() => {
      Axios.get("http://localhost:3001/api/wicketbybatsman").then((response) => {
          setPlayerList(response.data);
          
      })

  },[PlayerList]);
    return (<>
      <div className="Features-font"><p>This Feature will let you know about the bowlers who took wicket of a particular batsman most number of times.</p>
          <span>Enter the the name of batsman:</span>
          <input type="text" className="input" name="batsmanName"  onChange={(e) => {
              setBatsman(e.target.value);
          }}></input><br></br>
          <p>Enter the the number of wicket takers you want:</p>
          <input type="text" className="input" name="number"  onChange={(e) => {
              setNumberofwicketTakers(e.target.value);
          }}></input>
          <Button variant="info" size="sm" onClick={submitNumber}>Get List</Button>{' '}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
      <div className="flex-card" id="flex-card">
          {
              PlayerList.map((item) => (
                  <Card key={item.bowlerid} style={{ width: '20rem' }}>
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                          <Card.Title>{item.name}</Card.Title>

                          <ListGroup className="list-group-flush">
                              <ListGroup.Item><b>BowlerId: </b>{item.bowlerid}</ListGroup.Item>
                              
                              <ListGroup.Item><b>Age: </b>{item.age}</ListGroup.Item>
                              <ListGroup.Item><b>Team Name: </b>{item.tname}</ListGroup.Item>
                              <ListGroup.Item><b>No. of times wicket taken: </b>{item.Wickets}</ListGroup.Item>
                              
                          </ListGroup>
                      </Card.Body>
                  </Card>

              ))
          }
      </div>


  </>





);
  };
  
  export default WicketsBB;