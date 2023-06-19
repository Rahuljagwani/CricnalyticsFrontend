import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import { useState } from 'react';
function UpdateModal(props) {
  const [tableName, settableName] = useState("");
  const [attribute, setAttribute] = useState("");
  const [attribute1, setAttribute1] = useState("");
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [operator, setoperator] = useState("");

  const updateValues = () => {
    settableName(document.getElementById("select").value);
  setoperator(document.getElementById("selectop").value);


    Axios.post("http://localhost:3001/api/update", {

      tableName:tableName,
      attribute:attribute,
      attribute1:attribute1,
      value:value,
      value1:value1,
      operator:operator


  }).then((response) => {
    alert(response.data);
    console.log(response);})}


  return (


    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          UPDATE VALUES
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
        <br></br>
        <label>Enter Attribute whose value is to be updated:</label>
        <input type="text" id="attribute1" placeholder="Enter attribute name" onChange={(e) => {
          setAttribute1(e.target.value);
        }}></input>
        <br></br>
        <br></br>
        <label>Enter Value to be updated:</label>
        <input type="text" id="value11" placeholder="Enter Value" onChange={(e) => {
          setValue1(e.target.value);
        }}></input>
        <br></br>
        <br></br>
        <label>Enter Condition:</label>
        <br></br>
        <br></br>
        
        <input type="text" id="attribute" placeholder="Enter attribute name" onChange={(e) => {
          setAttribute(e.target.value);
        }}></input>

        <select id="selectop">
          <option value=">"> `{'>'}`
          </option>
          <option value="<">  `{'<'}`
          </option>
          <option value="=">  `{'='}`
          </option>
          <option value=">=">  `{'>='}`
          </option>
          <option value="<=">  `{'<='}`
          </option>

        </select>
        <input type="text" id="value" placeholder="Enter Value" onChange={(e) => {
          setValue(e.target.value);
        }}></input>
        <br></br><br></br><br></br>
        <button onClick={updateValues}>Update Table</button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>);
}

export default UpdateModal;