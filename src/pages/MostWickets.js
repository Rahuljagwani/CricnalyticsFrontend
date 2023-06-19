import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Axios from "axios";
const MostWickets = () => {
  const [PlayerList, setPlayerList] = useState([]);

  const [NumberofMaxWicketTakers, setNumberofMaxWicketTakers] = useState(0);
  const submitNumber = () => {
    // if(NumberofMaxWicketTakers<1)
        // {
            
        //     alert("Enter value greater than 0");
            
        // }
    
    Axios.post("http://localhost:3001/api/maxWickets", {
      NumberofMaxWicketTakers: NumberofMaxWicketTakers
    }).then(() => { })



  };
  useEffect(() => {
    Axios.get("http://localhost:3001/api/maxWickets").then((response) => {
      setPlayerList(response.data);

    })

  }, [PlayerList]);
  return (
    <>
      <div className="Features-font"><p>This Feature will let you know about the top Wicket Takers of the tournament.</p>
        <p>Enter the the number of Wicket Takers you want:</p>
        <input type="text" className="input" name="number" onChange={(e) => {
          setNumberofMaxWicketTakers(e.target.value);
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
                  <ListGroup.Item><b>Country: </b>{item.country}</ListGroup.Item>
                  <ListGroup.Item><b>Total Wickets: </b>{item.wickets}</ListGroup.Item>
                  <ListGroup.Item><b>Team Name: </b>{item.tname}</ListGroup.Item>

                </ListGroup>
              </Card.Body>
            </Card>

          ))
        }
      </div>


    </>





  );
};

export default MostWickets;