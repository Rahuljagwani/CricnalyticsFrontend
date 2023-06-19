import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Axios from "axios";


const RunsBB = () => {
  const [PlayerList, setPlayerList] = useState([]);
  const [Bowler, setBowler] = useState([]);
    
  const [NumberofrunScorers, setNumberofrunScorers] = useState(0);
  const submitNumber = () => {
     // if(NumberofrunScorers<1)
        // {
            
        //     alert("Enter value greater than 0");
            
        // }
      Axios.post("http://localhost:3001/api/runsbyBowler", {
          NumberofrunScorers: NumberofrunScorers,
          Bowler:Bowler
      }).then(() => { })

      

  };
  useEffect(() => {
      Axios.get("http://localhost:3001/api/runsbyBowler").then((response) => {
          setPlayerList(response.data);
          
      })

  },[PlayerList]);
    return (<>
      <div className="Features-font"><p>This Feature will let you know about the batsmen who scored most runs against a particular bowler .</p>
          <span>Enter the the name of bowler:</span>
          <input type="text" className="input" name="bowlerName"  onChange={(e) => {
              setBowler(e.target.value);
          }}></input><br></br>
          <p>Enter the the number of batsmen you want:</p>
          <input type="text" className="input" name="number"  onChange={(e) => {
              setNumberofrunScorers(e.target.value);
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
                  <Card key={item.batterid} style={{ width: '20rem' }}>
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                          <Card.Title>{item.name}</Card.Title>

                          <ListGroup className="list-group-flush">
                              <ListGroup.Item><b>BatterId: </b>{item.batterid}</ListGroup.Item>
                              <ListGroup.Item><b>Age: </b>{item.age}</ListGroup.Item>
                              <ListGroup.Item><b>Team Name: </b>{item.tname}</ListGroup.Item>
                              <ListGroup.Item><b>Runs Scored: </b>{item.runs}</ListGroup.Item>
                              
                          </ListGroup>
                      </Card.Body>
                  </Card>

              ))
          }
      </div>


  </>





);
  };
  
  export default RunsBB;