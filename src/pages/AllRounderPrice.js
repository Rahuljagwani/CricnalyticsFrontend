import { useState } from 'react';
import Axios from 'axios';
import './AllRounderPrice.css';
const AllRounderPrice = () => {
    const [age, setAge] = useState("");
    const [domestic, setDomestic] = useState(1);
    const [leftHanded, setLeftHanded] = useState(0);
    const [inningsBatted, setInningsBatted] = useState("");
    const [runsScored, setRunsScored] = useState("");
    const [highestInnScore, setHighestInnScore] = useState("");
    const [battingAVG, setBattingAVG] = useState("");
    const [battingSR, setBattingSR] = useState("");
    const [overs, setOvers] = useState("");
    const [inningsBowled, setInningsBowled] = useState("");
    const [runsConceded, setRunsConceded] = useState("");
    const [wickets, setWickets] = useState("");
    const [bowlingAVG, setBowlingAVG] = useState("");
    const [economyRate, setEconomyRate] = useState("");

    const submitValue = () => {

        Axios.post("http://127.0.0.1:5000/predict", {
            player: "allrounder",
            age: age,
            domestic: domestic,
            foreign: !domestic,
            leftHanded: leftHanded,
            rightHanded: !leftHanded,
            inningsBatted: inningsBatted,
            runsScored: runsScored,
            highestInnScore: highestInnScore,
            battingAVG: battingAVG,
            battingSR: battingSR,
            overs: overs,
            inningsBowled: inningsBowled,
            runsConceded: runsConceded,
            wickets: wickets,
            bowlingAVG: bowlingAVG,
            economyRate: economyRate
        }).then((response) => {
            alert("Predicted price is: " + response.data.output + " Crores");
        })

    };


    return (
        <>

            <form id="form" className='row g-2 w-50'>
                <p>Enter the details to get the idea of price all-rounder may get in next auction.</p>
                <div className='d-flex flex-row'>
                    <div className='col-lg-3 col-md-6 w-50'>

                        <div className="form-group">
                            <label>Age</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">          </div>
                                <input type="text" id="age" placeholder="Enter Your Age" required onChange={(e) => { setAge(e.target.value); }} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >Select if player is indian or not</label>
                            <br />
                            <div>
                                <div>           </div>
                                <select className="input-group-addon" required onChange={(e) => { setDomestic(e.target.value); }}>
                                    <option value="1">Indian</option>
                                    <option value="0">Foreigner</option>
                                </select>
                            </div>
                        </div>




                        <div className="form-group">
                            <label >Select if player is left handed or right handed</label>
                            <br />
                            <div>
                                <div>           </div>
                                <select className="input-group-addon" required onChange={(e) => { setLeftHanded(e.target.value); }}>
                                    <option value="0">Left Handed</option>
                                    <option value="1">Right handed</option>
                                </select>
                            </div>
                        </div>


                        <div className="form-group">
                            <label >Innings Batted</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">           </div>
                                <input type="text" id="innbat" required onChange={(e) => { setInningsBatted(e.target.value); }} placeholder="Enter innings batted" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Highest runs scored in an innings</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="hruns" required onChange={(e) => { setHighestInnScore(e.target.value); }} placeholder="Enter highest score" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >Runs scoreed</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="runs" required onChange={(e) => { setRunsScored(e.target.value); }} placeholder="Confirm runs scored" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label >Batting Average</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="bavg" required onChange={(e) => { setBattingAVG(e.target.value); }} placeholder="Enter batting average" />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 mx-3 w-50'>
                        <div className="form-group">
                            <label>Strike Rate</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="srate" required onChange={(e) => { setBattingSR(e.target.value); }} placeholder="Enter Strike rate" />
                            </div>
                        </div>




                        <div className="form-group">
                            <label for="username">Innings Bowled</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">           </div>
                                <input type="text" required onChange={(e) => { setInningsBowled(e.target.value); }} id="innbowl" placeholder="Enter innings bowled" />
                            </div>
                        </div>


                        <div className="form-group">
                            <label for="password">Overs</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="overs" required onChange={(e) => { setOvers(e.target.value); }} placeholder="Enter overs" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="password-confirm">Runs Conceded</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="rconc" required onChange={(e) => { setRunsConceded(e.target.value); }} placeholder="Enter runs conceded" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="password-confirm">Wickets</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="wickets" required onChange={(e) => { setWickets(e.target.value); }} placeholder="Enter wickets taken" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="password-confirm">Bowling Average</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="bavg" required onChange={(e) => { setBowlingAVG(e.target.value); }} placeholder="Enter bowling average" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="password-confirm">Economy Rate</label>
                            <br />
                            <div className="input-group">
                                <div className="input-group-addon">         </div>
                                <input type="text" id="erate" required onChange={(e) => { setEconomyRate(e.target.value); }} placeholder="Enter economy rate" />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={submitValue} className="btn btn-success buttML">Find Price</button>
            </form >
        </>
    );
}
export default AllRounderPrice;