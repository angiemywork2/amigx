import React from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Disclaimer from "../components/Disclaimer";

const Medication = () =>
  <Container fluid>
    <Row>
      <Col size ="md-10, col-md-offset-1">
        <Jumbotron>
          <h1>Medication Translator</h1>
          <div class="panel panel-default">
            <div class="panel-body">
              Basic panel example
            </div>
          </div>
          <div className="row">
            <div className="col-md-6, col-md-offset-1">
              <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">Prescription Example</button>
              <div id="demo" className="collapse">
                <div className="thumbnail">  
                 <div className="caption, text-center">
                      <p>Here is an example of a medical prescription</p>
                  </div>
                  <img src="https://i.pinimg.com/736x/34/72/7c/34727c2d10cb6ec5c484e3b2c1c62699--ldr-gifts-medical-science.jpg" alt="Lights" className="img-responsive"/>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Col>
    </Row>
  </Container>

export default Medication;