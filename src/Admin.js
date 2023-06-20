import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InsertModal from './Modals/InsertModal';
import UpdateModal from './Modals/UpdateModal';
import DeleteModal from './Modals/DeleteModal';
const Admin = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [InsertmodalShow, setInsertModalShow] = useState(false);
  const [DeletemodalShow, setDeleteModalShow] = useState(false);
  const [UpdatemodalShow, setUpdateModalShow] = useState(false);


  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    var { uname, pass } = document.forms[0];


    const userData = database.find((user) => user.username === uname.value);


    if (userData) {
      if (userData.password !== pass.value) {

        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        document.getElementById("title").innerHTML = "Successfully Signed in";
      }
    } else {

      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>Username&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <br></br>
        <div className="container">
          <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <br></br>
        <div className="container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  return (
    <><Button onClick={() => window.location.reload(false)}>Back to Main page</Button>

      <div className="bg-info container shadow-lg rounded w-50 px-5 py-5 mt-5">
        <h4 className="title mx-4" id="title">Sign In</h4>
        <br></br>
        {isSubmitted ?


          <>
            <h5>Choose operation to be performed on Tables:</h5>
            <ButtonGroup vertical>
              <Button variant="warning" size="lg" onClick={() => setInsertModalShow(true)}>Insert values</Button>
              <InsertModal
                show={InsertmodalShow}
                onHide={() => setInsertModalShow(false)}
              />
              <br></br>
              <Button variant="warning" size="lg" onClick={() => setDeleteModalShow(true)}>Delete values</Button>
              <DeleteModal
                show={DeletemodalShow}
                onHide={() => setDeleteModalShow(false)}
              />
              <br></br>
              <Button variant="warning" size="lg" onClick={() => setUpdateModalShow(true)}>Update values</Button>
              <UpdateModal
                show={UpdatemodalShow}
                onHide={() => setUpdateModalShow(false)}
              />
            </ButtonGroup>



          </> : renderForm}
      </div>
    </>
  );
};

export default Admin;