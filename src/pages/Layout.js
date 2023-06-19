import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/esm/Button";

const Layout = () => {
  return (
    <>
     <Navbar bg="info" variant="light">
     <Button onClick={() => window.location.reload(false)}>Main page</Button>
        <Container>
          
          {/* <Nav className="me-auto"> */}
          <h5 className="nav-ele"><Link className="hello" to="/"> Home </Link></h5>
          <h5 className="nav-ele"><Link className="hello" to="/MaxRuns">Max Runs</Link></h5>
          <h5 className="nav-ele"><Link className="hello" to="/MostWickets">Most Wickets</Link></h5>
          <h5 className="nav-ele"><Link className="hello" to="/wicketsBB">Wickets(By Batsman)</Link></h5>
          <h5 className="nav-ele"><Link className="hello" to="/runsBB">Runs(By Bowler)</Link></h5>
          
          
          {/* </Nav> */}
        </Container>
      </Navbar>










      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;
