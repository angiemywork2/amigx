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
          <h1 className="text-center">Medication Translator</h1>
          <Row>
            <Col size = "md-3, col-md-offset-1">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3 className="text-center">
                    Use the form below to translate pharmacuetical prescriptions into spanish.
                  </h3>
                  <h3 className="text-center">
                  click the example below to see where parts of the prescription are usually located.
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
          <div className="row">
            <div className="col-md-6">
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


        <Row>
          <Col size="md-6">
            <Jumbotron>
              <form>
                <Input name="PharmName" placeholder="Pharmacy Name (required)" />
                <Input name="PharmAddress" placeholder="Pharmacy Address (required)" />
                <Input name="PharmPhone" placeholder="Pharmacy Telephone Number (required)" />
                <Input name="PharmDrugNum" placeholder="Pharmacy Drug ID Number (required)" />
                <Input name="PharmFillDate" placeholder="Prescription Fill Date(required)" />
                <Input name="DocName" placeholder="Doctor's Name (required)" />
                <Input name="PatientName" placeholder="Patient Name (required)" />
                <TextArea name="DrugInstruct" placeholder="Drug Instructions (required)" />
                <Input name="DrugName" placeholder="Drug Name and Strength (required)" />
                <Input name="DrugRefill" placeholder="Drug refills (required)"/>
                <Input name="DrugUseByDate" placeholder="Use By Date (required)"/>

                <FormBtn>Translate Prescription</FormBtn>
                <br/>
              </form>
            </Jumbotron>
          </Col>
        </Row>
        
      </Col>
    </Row>
  </Container>

export default Medication;