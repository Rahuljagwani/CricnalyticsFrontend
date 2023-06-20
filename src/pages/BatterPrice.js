import {  useState } from 'react';
import Axios from 'axios';
import './BatterPrice.css';
const BatterPrice = () => {
    const [age, setAge] = useState("");
    const [domestic, setDomestic] = useState(1);
    const [leftHanded, setLeftHanded] = useState(0);
    const [inningsBatted, setInningsBatted] = useState("");
    const [runsScored, setRunsScored] = useState("");
    const [highestInnScore, setHighestInnScore] = useState("");
    const [battingAVG, setBattingAVG] = useState("");
    const [battingSR, setBattingSR] = useState("");

    const submitValue = () => {

        Axios.post("http://127.0.0.1:5000/predict", {
            player: "batter",
            age: age,
            domestic: domestic,
            foreign: !domestic,
            leftHanded: leftHanded,
            rightHanded: !leftHanded,
            inningsBatted: inningsBatted,
            runsScored: runsScored,
            highestInnScore: highestInnScore,
            battingAVG: battingAVG,
            battingSR: battingSR
        }).then((response) => {
            alert("Predicted price is: " + response.data.output + " Crores");
        })
    };
    return (
        <>
            <form id="form">
                <p>Enter the details to get the idea of price batter may get in next auction.</p>

                <div className="form-group">
                    <label>Age</label>
                    <br />
                    <div className="input-group">
                        <div className="input-group-addon">          </div>
                        <input type="text" id="age" placeholder="Enter Your Age" required onChange={(e) => { setAge(e.target.value); }}/>
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
                <div className="form-group">
                    <label>Strike Rate</label>
                    <br />
                    <div className="input-group">
                        <div className="input-group-addon">         </div>
                        <input type="text" id="srate" required onChange={(e) => { setBattingSR(e.target.value); }} placeholder="Enter Strike rate" />
                    </div>
                </div>
                <button type="button" onClick={submitValue} className="btn btn-success buttML">Find Price</button>
            </form >
        </>
    )
}
export default BatterPrice;