
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#"></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">About us</Nav.Link>
      <NavDropdown title="Contact" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Contact</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Prouduct</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled >
        Search
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success" style={{textAlign: 'left'}}>Search</Button>

    </Form>
  </Navbar.Collapse>
</Navbar> 
        </div>
        <Form>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{textAlign: 'left'}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>End our web site</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    
  </Card.Body>
</Card>
    </div>
    
  );
}

export default App;
