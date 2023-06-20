import { useState } from 'react';
import Axios from 'axios';
import './BowlerPrice.css';
const BowlerPrice = () => {
    const [age, setAge] = useState("");
    const [domestic, setDomestic] = useState(1);
    const [overs, setOvers] = useState("");
    const [inningsBowled, setInningsBowled] = useState("");
    const [runsConceded, setRunsConceded] = useState("");
    const [wickets, setWickets] = useState("");
    const [bowlingAVG, setBowlingAVG] = useState("");
    const [economyRate, setEconomyRate] = useState("");

    const submitValue = () => {

        Axios.post("http://127.0.0.1:5000/predict", {
            player: "bowler",
            age: age,
            domestic: domestic,
            foreign: !domestic,
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

            <form id="form">
                <p>Enter the details to get the idea of price bowler may get in next auction.</p>

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
                        <input type="text" id="rconc" required onChange={(e) => { setRunsConceded(e.target.value); }} placeholder="Confirm runs conceded" />
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
                <button type="button" onClick={submitValue} className="btn btn-success buttML">Find Price</button>
            </form >
        </>
    );
}
export default BowlerPrice;