import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";

function App() {
  let [shoes] = useState(data);

  return (
    <div>
      <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} idx={i + 1}></Card>;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col className="text-center">
      <img
        width="80%"
        src={
          "https://codingapple1.github.io/shop/shoes" + props.idx + ".jpg"
        }></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  );
}

export default App;
