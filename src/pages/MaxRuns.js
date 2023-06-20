import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Axios from "axios";
const MaxRuns = () => {

    const [PlayerList, setPlayerList] = useState([]);
    
    const [Numberofscorers, setNumberofscorers] = useState(0);
    const submitNumber = () => {
        // if(Numberofscorers<1)
        // {
            
        //     alert("Enter value greater than 0");
            
        // }
        
        Axios.post("http://localhost:3001/api/maxruns", {
            Numberofscorers: Numberofscorers
        }).then(() => { })

        

    };
    useEffect(() => {
        Axios.get("http://localhost:3001/api/maxruns").then((response) => {
            setPlayerList(response.data);
            
        })

    },[PlayerList]);
    return (
        <>
            <div className="container mx-5 my-5"><p>This Feature will let you know about the top scorers of the tournament.</p>
                <p>Enter the the number of run scorers you want:</p>
                <input type="text" className="input" name="number"  onChange={(e) => {
                    setNumberofscorers(e.target.value);
                }}></input>
                <Button variant="info" size="sm" onClick={submitNumber}>Get List</Button>{' '}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className="row g-5 px-5" id="flex-card">
                {
                    PlayerList.map((item) => (
                        <Card key={item.batterid} style={{ width: '20rem' }} className='col-lg-3 col-md-6 mx-3'>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>

                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><b>BatterId: </b>{item.batterid}</ListGroup.Item>
                                    <ListGroup.Item><b>Age: </b>{item.age}</ListGroup.Item>
                                    <ListGroup.Item><b>Country: </b>{item.country}</ListGroup.Item>
                                    <ListGroup.Item><b>Total Runs: </b>{item.Runs}</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card.Body>
                        </Card>

                    ))
                }
            </div>


        </>





    );
};

export default MaxRuns;