import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
function InsertModal(props) {

    const [batterid, setbatterid] = useState("");
    const [playerid, setplayerid] = useState("");
    const [matchesplayed, setmatchesplayed] = useState("");
    const [runs, setruns] = useState("");
    const [teamid, setteamid] = useState("");
    const [battingSR, setbattingSR] = useState("");
    const [battingAVG, setbattingAVG] = useState("");
    const [sixes, setsixes] = useState("");
    const [fours, setfours] = useState("");
    const [hundreds, sethundreds] = useState("");
    const [fifties, setfifties] = useState("");
    const [tableName, settableName] = useState("");
    const [bowlerid, setbowlerid] = useState("");

    const [type, settype] = useState("");
    const [wickets, setwickets] = useState("");
    const [overs, setovers] = useState("");
    const [runsgiven, setrunsgiven] = useState("");
    const [bowlingAVG, setbowlingAVG] = useState("");
    const [bowlingEconomy, setbowlingEconomy] = useState("");
    const [name, setname] = useState("");

    const [role, setrole] = useState("");
    const [country, setcountry] = useState("");
    const [age, setage] = useState("");
    const [position, setposition] = useState("");

    const [teamname, setteamname] = useState("");

    const [matcheswon, setmatcheswon] = useState("");
    const [matcheslost, setmatcheslost] = useState("");
    const [matchesdraw, setmatchesdraw] = useState("");
    const [nrr, setnrr] = useState("");
    const [points, setpoints] = useState("");
    const [ballid, setballid] = useState("");
    const [runsperball, setrunsperball] = useState("");
    const [isWide, setisWide] = useState("");
    const [isNoball, setisNoball] = useState("");
    const [isWicket, setisWicket] = useState("");


    const insertTable = () => {
        settableName(document.getElementById("select").value);
        document.getElementById("Batters").style.display = tableName==="Batters"?"block":"none";
        document.getElementById("Bowlers").style.display = tableName==="Bowlers"?"block":"none";
        document.getElementById("Players").style.display = tableName==="Players"?"block":"none";
        document.getElementById("Teams").style.display = tableName==="Teams"?"block":"none";
        document.getElementById("Balls").style.display = tableName==="Balls"?"block":"none";

    }
    const insertValues = () => {

        Axios.post("http://localhost:3001/api/insert", {
            tableName: tableName,
            batterid: batterid,
            playerid: playerid,
            matchesplayed: matchesplayed,
            runs: runs,
            teamid: teamid,
            battingSR: battingSR,
            battingAVG: battingAVG,
            sixes: sixes,
            fours: fours,
            hundreds: hundreds,
            fifties: fifties,
            bowlerid: bowlerid,
            type: type,
            wickets: wickets,
            overs: overs,
            runsgiven: runsgiven,
            bowlingAVG: bowlingAVG,
            bowlingEconomy: bowlingEconomy,
            name: name,
            role: role,
            country: country,
            age: age,
            position: position,
            teamname: teamname,
            matcheswon: matcheswon,
            matcheslost: matcheslost,
            matchesdraw: matchesdraw,
            nrr: nrr,
            points: points,
            ballid: ballid,
            runsperball: runsperball,
            isWide: isWide,
            isNoball: isNoball,
            isWicket: isWicket

        }).then((response) => {
            alert(response.data);
            console.log(response);
        })


    }


    return (

        <>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        INSERT INTO TABLES
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <label><h5>Choose Table:</h5></label>
                    <select id="select">
                        <option value="Batters"> Batters
                        </option>
                        <option value="Bowlers"> Bowlers
                        </option>
                        <option value="Teams"> Teams
                        </option>
                        <option value="Players"> Players
                        </option>
                        <option value="Balls"> Balls
                        </option>

                    </select>
                    <button onClick={insertTable}>select</button>
                    <br></br>
                    <br></br>
                    <div id="Batters" className="info">
                        <input type="text" id="batterid" placeholder="Enter Batter id" onChange={(e) => {
                            setbatterid(e.target.value);
                        }}></input>

                        <input type="text" id="playerid" placeholder="Enter player id" onChange={(e) => {
                            setplayerid(e.target.value);
                        }}></input>

                        <input type="text" id="matchesplayed" placeholder="matchesplayed" onChange={(e) => {
                            setmatchesplayed(e.target.value);
                        }}></input>

                        <input type="text" id="runs" placeholder="runs" onChange={(e) => {
                            setruns(e.target.value);
                        }}></input>

                        <input type="text" id="teamid" placeholder="Enter teamid" onChange={(e) => {
                            setteamid(e.target.value);
                        }}></input>

                        <input type="text" id="battingSR" placeholder="Enter batting SR" onChange={(e) => {
                            setbattingSR(e.target.value);
                        }}></input>

                        <input type="text" id="battingAVG" placeholder="Enter battingAVG" onChange={(e) => {
                            setbattingAVG(e.target.value);
                        }}></input>

                        <input type="text" id="sixes" placeholder="Enter 6s" onChange={(e) => {
                            setsixes(e.target.value);
                        }}></input>

                        <input type="text" id="fours" placeholder="Enter 4s" onChange={(e) => {
                            setfours(e.target.value);
                        }}></input>

                        <input type="text" id="hundreds" placeholder="Enter 100s" onChange={(e) => {
                            sethundreds(e.target.value);
                        }}></input>

                        <input type="text" id="fifties" placeholder="Enter 50s" onChange={(e) => {
                            setfifties(e.target.value);
                        }}></input>

                        <br></br>
                        <button onClick={insertValues}>Insert into Table</button>
                    </div>


                    <div id="Bowlers" className="info">
                        <input type="text" id="bowlerid" placeholder="Enter Bowler id" onChange={(e) => {
                            setbowlerid(e.target.value);
                        }}></input>

                        <input type="text" id="teamid" placeholder="Enter teamid" onChange={(e) => {
                            setteamid(e.target.value);
                        }}></input>

                        <input type="text" id="playerid" placeholder="Enter player id" onChange={(e) => {
                            setplayerid(e.target.value);
                        }}></input>

                        <input type="text" id="matchesplayed" placeholder="matchesplayed" onChange={(e) => {
                            setmatchesplayed(e.target.value);
                        }}></input>

                        <input type="text" id="type" placeholder="Enter type" onChange={(e) => {
                            settype(e.target.value);
                        }}></input>

                        <input type="text" id="wickets" placeholder="Enter wickets" onChange={(e) => {
                            setwickets(e.target.value);
                        }}></input>

                        <input type="text" id="overs" placeholder="Enter overs" onChange={(e) => {
                            setovers(e.target.value);
                        }}></input>

                        <input type="text" id="runsgiven" placeholder="runsgiven" onChange={(e) => {
                            setrunsgiven(e.target.value);
                        }}></input>

                        <input type="text" id="bowlingAVG" placeholder="Enter bowling AVG" onChange={(e) => {
                            setbowlingAVG(e.target.value);
                        }}></input>

                        <input type="text" id="bowlingEconomy" placeholder="Enter bowling Economy" onChange={(e) => {
                            setbowlingEconomy(e.target.value);
                        }}></input>



                        <br></br>
                        <button onClick={insertValues}>Insert into Table</button>
                    </div>

                    <div id="Players" className="info">
                        <input type="text" id="name" placeholder="Enter name" onChange={(e) => {
                            setname(e.target.value);
                        }}></input>

                        <input type="text" id="playerid" placeholder="Enter player id" onChange={(e) => {
                            setplayerid(e.target.value);
                        }}></input>

                        <input type="text" id="teamid" placeholder="Enter teamid" onChange={(e) => {
                            setteamid(e.target.value);
                        }}></input>

                        <input type="text" id="role" placeholder="Enter role" onChange={(e) => {
                            setrole(e.target.value);
                        }}></input>

                        <input type="text" id="country" placeholder="Enter country" onChange={(e) => {
                            setcountry(e.target.value);
                        }}></input>

                        <input type="text" id="age" placeholder="Enter age" onChange={(e) => {
                            setage(e.target.value);
                        }}></input>

                        <br></br>
                        <button onClick={insertValues}>Insert into Table</button>
                    </div>
                    <div id="Teams" className="info">
                        <input type="text" id="position" placeholder="Enter position" onChange={(e) => {
                            setposition(e.target.value);
                        }}></input>

                        <input type="text" id="teamid" placeholder="Enter teamid" onChange={(e) => {
                            setteamid(e.target.value);
                        }}></input>

                        <input type="text" id="teamname" placeholder="Enter Team Name" onChange={(e) => {
                            setteamname(e.target.value);
                        }}></input>

                        <input type="text" id="matchesplayed" placeholder="Enter Matches played" onChange={(e) => {
                            setmatchesplayed(e.target.value);
                        }}></input>

                        <input type="text" id="matcheswon" placeholder="Enter Matches won" onChange={(e) => {
                            setmatcheswon(e.target.value);
                        }}></input>

                        <input type="text" id="matcheslost" placeholder="Enter Matches lost" onChange={(e) => {
                            setmatcheslost(e.target.value);
                        }}></input>

                        <input type="text" id="matchesdraw" placeholder="Enter Matches draw" onChange={(e) => {
                            setmatchesdraw(e.target.value);
                        }}></input>

                        <input type="text" id="nrr" placeholder="Enter NRR" onChange={(e) => {
                            setnrr(e.target.value);
                        }}></input>

                        <input type="text" id="points" placeholder="Enter points" onChange={(e) => {
                            setpoints(e.target.value);
                        }}></input>


                        <br></br>
                        <button onClick={insertValues}>Insert into Table</button>
                    </div>
                    <div id="Balls" className="info">
                        <input type="text" id="ballid" placeholder="Enter ballid" onChange={(e) => {
                            setballid(e.target.value);
                        }}></input>

                        <input type="text" id="runsperball" placeholder="Enter runs per ball" onChange={(e) => {
                            setrunsperball(e.target.value);
                        }}></input>

                        <input type="text" id="isWide" placeholder="Enter isWide" onChange={(e) => {
                            setisWide(e.target.value);
                        }}></input>

                        <input type="text" id="isNoball" placeholder="Enter isNoball" onChange={(e) => {
                            setisNoball(e.target.value);
                        }}></input>

                        <input type="text" id="isWicket" placeholder="Enter isWicket" onChange={(e) => {
                            setisWicket(e.target.value);
                        }}></input>

                        <input type="text" id="batterid" placeholder="Enter batterid" onChange={(e) => {
                            setbatterid(e.target.value);
                        }}></input>

                        <input type="text" id="bowlerid" placeholder="Enter bowlerid" onChange={(e) => {
                            setbowlerid(e.target.value);
                        }}></input>

                        <input type="text" id="teamid" placeholder="Enter teamid" onChange={(e) => {
                            setteamid(e.target.value);
                        }}></input>

                        <br></br>
                        <button onClick={insertValues}>Insert into Table</button>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal> </>);
}

export default InsertModal;