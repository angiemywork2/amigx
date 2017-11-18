import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Disclaimer from "../components/Disclaimer";

const Tips = () =>
  <Container fluid>
    <Row>
    <Col size ="md-10, col-md-offset-1">
      <h1>Health Tips</h1>
      <Jumbotron>
        <h1>Diabetes</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
          gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
          Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
          fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
          euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
          diam, sit amet facilisis lectus blandit at.
        </p>
      </Jumbotron>
      <Jumbotron>
        <h1>High Blood Pressure</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
          gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
          Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
          fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
          euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
          diam, sit amet facilisis lectus blandit at.
        </p>
      </Jumbotron>
      <Jumbotron>
        <h1>High Cholestorol</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
          gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
          Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
          fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
          euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
          diam, sit amet facilisis lectus blandit at.
        </p>
      </Jumbotron>
      <Jumbotron>
        <h1>Mental Health</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
          gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
          Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
          fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
          euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
          diam, sit amet facilisis lectus blandit at.
        </p>
      </Jumbotron>
      <Jumbotron>
        <h1>Obesity</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
          gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
          Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
          fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
          euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
          diam, sit amet facilisis lectus blandit at.
        </p>
      </Jumbotron>
    </Col>
    </Row>
    <Row>
      <Disclaimer></Disclaimer>
    </Row>
  </Container>;

export default Tips;
