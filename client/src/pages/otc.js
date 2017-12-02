import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Disclaimer from "../components/Disclaimer";
import './otc.css';

// Benadryl
// Motrin
// Mucinex
// Sudafed
// Tylenol

// Name, 
// Commonly Used for, 
// General Direction, 
// Strength, 
// Dosage, 
// Frequency



const otc = () =>

  <Container fluid>
    <Row>
      <Col size ="md-10, col-md-offset-1">
        <h1>Quick Reference List of Over-The-Counter Medication</h1>
          <Jumbotron>
            <div className="panel-group" id="accordion">
              <p>Listed are commonly used over the counter medications.  
                  Please consult with your doctor before taking any medication!
              </p>
             

              <h3><strong>Advil | Motrin (Ibuprofen)</strong></h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea1">
                        <h4>About Advil | Motrin (Ibuprofen) <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea1" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Advil | Motrin is commonly used for: 
                      <ul>
                        <li>Fever Reducer</li>
                        <li>Headache</li>
                        <li>Menstrual Cramps</li>
                        <li>Muscle Aches</li>
                      </ul> 
                    </p>  
                    <p>
                    How it Works:
                      <ul>
                        <li>Reduces Inflammation. This effect helps to decrease swelling, pain, or fever.</li>
                      </ul>
                    </p>
                  </div>
                </div>
                


              <h3>Aleve (Naproxen)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea2">
                        <h4>About Aleve (Naproxen) <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea2" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Aleve is commonly used for: 
                      <ul>
                        <li>Fever Reducer</li>
                        <li>Headache</li>
                        <li>Menstrual Cramps</li>
                        <li>Minor aches and pain due to the common cold or flu</li>
                        <li>Muscle Aches</li>
                      </ul> 
                    </p>  
                    <p>
                    How it Works:
                      <ul>
                        <li>
                        It works by blocking your body's production of certain natural 
                        substances that cause inflammation. This effect helps to decrease 
                        swelling, pain, or fever.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>


              <h3>Benadryl (Diphenhydramine: an Antihistamine)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea3">
                        <h4>About Benadryl <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea3" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Benadryl is commonly used to releive the symptoms of: 
                      <ul>
                        <li>Allergies</li>
                        <li>Hay Fever</li>
                        <li>Common Cold</li>
                      </ul> 
                    </p>

                    <p>
                    These symptoms include:
                     <ul>
                      <li>Rash</li>
                      <li>Itchy, watery eyes</li>
                      <li>Cough</li>
                      <li>Runny Nose</li>
                      <li>Sneezing</li>
                     </ul>
                    </p>  

                    <p> Benadryl is also used to prevent and treat the following 
                        if when caused by motion sickness:
                      <ul>
                        <li>Nausea</li>
                        <li>Vomiting</li>
                        <li>Dizziness</li>
                      </ul>
                    </p>
                    
                    <p>
                    How it Works:
                      <ul>
                        <li>
                        This medication works by blocking a certain natural substance (histamine) that 
                        your body makes during an allergic reaction. Its drying effects on such symptoms 
                        as watery eyes and runny nose are caused by blocking another natural substance made
                        by your body (acetylcholine).
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>


              <h3>Mucinex (An Expectorant called Guaifenesin)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea4">
                        <h4>About Mucinex <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea4" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Mucinex is commonly used for the temporary relief of: 
                      <ul>
                        <li>Coughs</li>
                      </ul> 
                    </p>  
                    <p>
                    How it Works:
                      <ul>
                        <li>
                         It works by thinning and loosening mucus in the airways, 
                         clearing congestion, and making breathing easier.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>


              <h3>Sudafed (Pseudoephedrine, a decongestant)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea5">
                        <h4>About Sudafed <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea5" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Sudafed is commonly used for the temporary relief of: 
                      <ul>
                        <li>Sinus Pain or Pressure</li>
                        <li>Stuffy Nose</li>
                      </ul> 
                    </p>  
                    <p>
                    How it Works:
                      <ul>
                        <li>
                          It works by narrowing the blood vessels to decrease 
                          swelling and congestion.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>




              <h3> Tylenol (Acetaminophen)</h3>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className= "panel-title">
                      <a data-toggle = "collapse" data-parent = "#accordion" href=  "#collapsea6">
                        <h4>About Tylenol <span className="glyphicon glyphicon-circle-arrow-down" aria-hidden="true"></span></h4>
                      </a>
                    </h3>
                  </div>
                </div>

                <div id="collapsea6" className="panel-collapse collapse ">
                  <div className="panel-body">
                   <p>
                    Tylenol is commonly used to treat mild to moderate pain from: 
                      <ul>
                        <li>Headaches</li>
                        <li>Menstrual Periods</li>
                        <li>Toothaches</li>
                        <li>Backsaches</li>
                        <li>Osteoarthritis</li>
                        <li>Cold or flu aches and pains</li>
                      </ul> 
                    </p> 
                    <p>
                    Tylenol is also used as a: 
                    <ul>
                      <li>Fever Reducer</li>
                    </ul>
                    </p>
                    
                  </div>
                </div>
              

            </div>
          </Jumbotron>
      </Col>
    </Row>
    <Row>
      <Disclaimer></Disclaimer>
    </Row>
 </Container>



export default otc;
