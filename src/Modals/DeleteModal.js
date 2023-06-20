import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

import { useState } from 'react';
function DeleteModal(props) {


  const [tableName, settableName] = useState("");
  const [attribute, setAttribute] = useState("");
  const [value, setValue] = useState("");
  const [operator, setoperator] = useState("");



    const deleteValues = () => {
      settableName(document.getElementById("select").value);
    setoperator(document.getElementById("selectop").value);


      Axios.post("http://localhost:3001/api/delete", {

        tableName:tableName,
        attribute:attribute,
        value:value,
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
         DELETE FROM TABLES
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label><h5>Choose Table:</h5></label>
        <select id="select" onChange={(event) => {
          settableName(event.target.value);
        }}>
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
        <br></br><br></br>
        <label>Enter Condition:</label>
        <br></br>
        <label>Attribute name:</label>
        <input type="text" id="attribute" placeholder="Enter attribute name" onChange={(e) => {
          setAttribute(e.target.value);
        }}></input>

        <select id="selectop" onChange={(event) => {
          setoperator(event.target.value);
        }}>
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
        <button onClick={deleteValues}>Delete from Table</button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>);
}

export default DeleteModal;